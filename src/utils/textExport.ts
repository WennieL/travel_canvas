import { Plan, ScheduleItem, TimeSlot, TransportMode, LangType } from '../types';
import { getCurrencySymbol } from '../data/regions';

const SLOT_LABELS: Record<string, Record<TimeSlot, string>> = {
    zh: { morning: '🌅 上午', afternoon: '☀️ 下午', evening: '🌙 晚上', night: '🌃 深夜', accommodation: '🏨 住宿' },
    en: { morning: '🌅 Morning', afternoon: '☀️ Afternoon', evening: '🌙 Evening', night: '🌃 Night', accommodation: '🏨 Accommodation' },
};

const TRANSPORT_LABELS: Record<string, Record<TransportMode, string>> = {
    zh: { walk: '🚶 步行', public: '🚇 大眾運輸', car: '🚗 開車' },
    en: { walk: '🚶 Walk', public: '🚇 Transit', car: '🚗 Drive' },
};

const WEEKDAYS: Record<string, string[]> = {
    zh: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

function getItemTitle(item: ScheduleItem, lang: LangType): string {
    if (item.isLocked) return lang === 'zh' ? '🔒 秘境地點' : '🔒 Secret Spot';
    return (lang === 'en' && item.titleEn) ? item.titleEn : item.title;
}

function formatPrice(price: number | undefined, region?: string): string {
    if (!price || price === 0) return '';
    return `${getCurrencySymbol(region)}${price.toLocaleString()}`;
}

function calculateTravelTime(transport: TransportMode | undefined): string {
    // Simple estimate, could be improved
    return '';
}

export function generateTextItinerary(plan: Plan, lang: LangType = 'zh'): string {
    const lines: string[] = [];
    const isZh = lang === 'zh';

    // Header
    lines.push(`${'━'.repeat(30)}`);
    lines.push(`✈️ ${plan.name}`);
    lines.push(`📅 ${plan.startDate} ~ ${plan.endDate} (${plan.totalDays}${isZh ? '天' : ' days'})`);
    if (plan.destination || plan.region) {
        lines.push(`📍 ${plan.destination || plan.region?.toUpperCase() || ''}`);
    }
    lines.push(`${'━'.repeat(30)}`);
    lines.push('');

    let grandTotal = 0;
    const slots: TimeSlot[] = ['morning', 'afternoon', 'evening', 'night', 'accommodation'];

    // Get all day keys sorted
    const dayKeys = Object.keys(plan.schedule).sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, '')) || 0;
        const numB = parseInt(b.replace(/\D/g, '')) || 0;
        return numA - numB;
    });

    // Iterate over all days
    dayKeys.forEach((dayKey, idx) => {
        const daySchedule = plan.schedule[dayKey];
        if (!daySchedule) return;

        const dayNum = idx + 1;

        // Calculate day date
        let dateStr = '';
        let weekday = '';
        try {
            const startDate = new Date(plan.startDate);
            const dayDate = new Date(startDate);
            dayDate.setDate(startDate.getDate() + idx);
            weekday = WEEKDAYS[lang]?.[dayDate.getDay()] || '';
            dateStr = `${dayDate.getMonth() + 1}/${dayDate.getDate()}`;
        } catch { }

        lines.push(`📌 Day ${dayNum}${dateStr ? ` (${dateStr} ${weekday})` : ''}`);
        lines.push(`${'─'.repeat(28)}`);

        let dayTotal = 0;
        let hasItems = false;

        for (const slot of slots) {
            const items: ScheduleItem[] = daySchedule[slot] || [];
            if (items.length === 0) continue;

            hasItems = true;
            const slotLabel = SLOT_LABELS[lang]?.[slot] || slot;
            lines.push(`  ${slotLabel}`);

            items.forEach((item, idx) => {
                const title = getItemTitle(item, lang);
                const time = item.startTime ? `${item.startTime}` : '      ';
                const duration = item.duration ? `(${item.duration})` : '';
                const price = formatPrice(item.price, plan.region);
                const priceStr = price ? ` ${price}` : '';

                lines.push(`    ${time}  ${title} ${duration}${priceStr}`);

                if (item.price) {
                    dayTotal += item.price;
                    grandTotal += item.price;
                }

                // Transport to next item
                if (idx < items.length - 1) {
                    const nextItem = items[idx + 1];
                    const transport = nextItem.arrivalTransport || 'walk';
                    const transportLabel = TRANSPORT_LABELS[lang]?.[transport] || '';
                    if (transportLabel) {
                        lines.push(`           ${transportLabel}`);
                    }
                }
            });

            lines.push('');
        }

        if (!hasItems) {
            lines.push(`  ${isZh ? '(尚未規劃)' : '(Not planned yet)'}`);
            lines.push('');
        }

        if (dayTotal > 0) {
            lines.push(`  💰 ${isZh ? '預估花費' : 'Est. cost'}: ${getCurrencySymbol(plan.region)}${dayTotal.toLocaleString()}`);
            lines.push('');
        }
    });

    // Footer
    lines.push(`${'━'.repeat(30)}`);
    if (grandTotal > 0) {
        lines.push(`💰 ${isZh ? '全程預估總花費' : 'Total estimated cost'}: ${getCurrencySymbol(plan.region)}${grandTotal.toLocaleString()}`);
    }
    lines.push(`${isZh ? '由 TravelCanvas 產生' : 'Generated by TravelCanvas'} ✨`);
    lines.push(`${'━'.repeat(30)}`);

    return lines.join('\n');
}

/**
 * Opens a clean print-friendly page for saving as PDF.
 * Uses the plan data to generate a beautifully styled HTML document.
 */
export function downloadPdf(plan: Plan, lang: LangType = 'zh'): void {
    const isZh = lang === 'zh';
    const slots: TimeSlot[] = ['morning', 'afternoon', 'evening', 'night', 'accommodation'];

    const dayKeys = Object.keys(plan.schedule).sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, '')) || 0;
        const numB = parseInt(b.replace(/\D/g, '')) || 0;
        return numA - numB;
    });

    let daysHtml = '';
    let grandTotal = 0;

    dayKeys.forEach((dayKey, idx) => {
        const daySchedule = plan.schedule[dayKey];
        if (!daySchedule) return;

        let dateStr = '';
        let weekday = '';
        try {
            const startDate = new Date(plan.startDate);
            const dayDate = new Date(startDate);
            dayDate.setDate(startDate.getDate() + idx);
            weekday = WEEKDAYS[lang]?.[dayDate.getDay()] || '';
            dateStr = `${dayDate.getMonth() + 1}/${dayDate.getDate()}`;
        } catch { }

        let dayTotal = 0;
        let slotsHtml = '';

        for (const slot of slots) {
            const items: ScheduleItem[] = daySchedule[slot] || [];
            if (items.length === 0) continue;

            const slotLabel = SLOT_LABELS[lang]?.[slot] || slot;
            let itemsHtml = '';

            items.forEach((item, i) => {
                const title = getItemTitle(item, lang);
                const time = item.startTime || '';
                const duration = item.duration ? `(${item.duration})` : '';
                const price = item.price ? `${getCurrencySymbol(plan.region)}${item.price.toLocaleString()}` : '';

                if (item.price) {
                    dayTotal += item.price;
                    grandTotal += item.price;
                }

                itemsHtml += `
                    <div style="display:flex;align-items:baseline;gap:12px;padding:6px 0;${i > 0 ? 'border-top:1px dotted #e5e7eb;' : ''}">
                        <span style="font-family:monospace;color:#6b7280;min-width:50px;font-size:13px">${time}</span>
                        <span style="flex:1;font-weight:600;font-size:14px;color:#1f2937">${title} <span style="font-weight:400;color:#9ca3af;font-size:12px">${duration}</span></span>
                        ${price ? `<span style="color:#0d9488;font-weight:700;font-size:13px">${price}</span>` : ''}
                    </div>
                `;

                if (i < items.length - 1) {
                    const nextItem = items[i + 1];
                    const transport = nextItem.arrivalTransport || 'walk';
                    const tLabel = TRANSPORT_LABELS[lang]?.[transport] || '';
                    if (tLabel) {
                        itemsHtml += `<div style="padding:2px 0 2px 62px;color:#9ca3af;font-size:11px">${tLabel}</div>`;
                    }
                }
            });

            slotsHtml += `
                <div style="margin-bottom:16px">
                    <div style="font-size:13px;font-weight:700;color:#6b7280;margin-bottom:6px;text-transform:uppercase;letter-spacing:1px">${slotLabel}</div>
                    ${itemsHtml}
                </div>
            `;
        }

        const dayTotalHtml = dayTotal > 0 ? `<div style="text-align:right;color:#0d9488;font-weight:700;font-size:13px;padding-top:8px;border-top:1px solid #e5e7eb">💰 ${isZh ? '預估花費' : 'Est.'}: ${getCurrencySymbol(plan.region)}${dayTotal.toLocaleString()}</div>` : '';

        daysHtml += `
            <div style="page-break-inside:avoid;margin-bottom:32px;${idx > 0 ? 'page-break-before:auto;' : ''}">
                <div style="background:linear-gradient(135deg,#f0fdfa,#ecfdf5);border-radius:12px;padding:16px 20px;margin-bottom:16px;border-left:4px solid #0d9488">
                    <h2 style="margin:0;font-size:18px;font-weight:800;color:#134e4a">📌 Day ${idx + 1}${dateStr ? ` <span style="font-weight:400;color:#6b7280;font-size:14px">(${dateStr} ${weekday})</span>` : ''}</h2>
                </div>
                <div style="padding:0 8px">
                    ${slotsHtml}
                    ${dayTotalHtml}
                </div>
            </div>
        `;
    });

    const grandTotalHtml = grandTotal > 0 ? `<div style="text-align:center;font-size:16px;font-weight:800;color:#0d9488;padding:16px;background:#f0fdfa;border-radius:12px;margin-top:24px">💰 ${isZh ? '全程預估總花費' : 'Total'}: ${getCurrencySymbol(plan.region)}${grandTotal.toLocaleString()}</div>` : '';

    const html = `<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<title>${plan.name} - TravelCanvas</title>
<style>
@media print {
    body { margin: 0; padding: 20px; }
    .no-print { display: none !important; }
}
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    max-width: 700px; margin: 0 auto; padding: 40px 24px;
    color: #1f2937; line-height: 1.5; background: #fff;
}
</style>
</head><body>
<div style="text-align:center;margin-bottom:32px;padding-bottom:24px;border-bottom:2px solid #0d9488">
    <div style="font-size:11px;font-weight:700;color:#0d9488;text-transform:uppercase;letter-spacing:3px;margin-bottom:8px">TravelCanvas</div>
    <h1 style="margin:0 0 8px;font-size:28px;font-weight:900;color:#134e4a">✈️ ${plan.name}</h1>
    <div style="color:#6b7280;font-size:14px">📅 ${plan.startDate} ~ ${plan.endDate} (${plan.totalDays}${isZh ? '天' : ' days'})${plan.destination ? ` &nbsp;·&nbsp; 📍 ${plan.destination}` : ''}</div>
</div>
${daysHtml}
${grandTotalHtml}
<div style="text-align:center;margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;color:#9ca3af;font-size:11px">
    ${isZh ? '由 TravelCanvas 產生' : 'Generated by TravelCanvas'} ✨
</div>
<div class="no-print" style="text-align:center;margin-top:24px">
    <button onclick="window.print()" style="padding:12px 32px;background:#0d9488;color:white;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer">
        ${isZh ? '📄 儲存為 PDF' : '📄 Save as PDF'}
    </button>
</div>
</body></html>`;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
        printWindow.document.write(html);
        printWindow.document.close();
        // Auto-trigger print after content loads
        printWindow.onload = () => {
            setTimeout(() => printWindow.print(), 500);
        };
    }
}

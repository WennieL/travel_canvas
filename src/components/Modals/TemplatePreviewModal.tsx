import React from 'react';
import { X, Clock, MapPin, Star, Lock, CheckCircle2, User, Users, Sparkles, ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';
import { Template, ScheduleItem, DaySchedule, FullSchedule } from '../../types';
import { getGradient, getRegionEmoji, getRegionName } from '../../data/regions';

interface TemplatePreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    template: Template | null;
    onApply: (template: Template) => void;
    onUnlock: (template: Template) => void;
    onViewCreator?: (authorId: string) => void; // Navigate to creator profile
    t: any;
    lang?: 'zh' | 'en';
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
    isOpen,
    onClose,
    template,
    onApply,
    onUnlock,
    onViewCreator,
    t,
    lang = 'zh'
}) => {
    const [openFaq, setOpenFaq] = React.useState<string | null>(null);

    if (!isOpen || !template) return null;

    const isLocked = template.isLocked && !template.purchased;

    // Unified way to get all items regardless of schedule structure
    const allItems: ScheduleItem[] = ('morning' in template.schedule)
        ? Object.values(template.schedule as DaySchedule).flat()
        : Object.values(template.schedule as FullSchedule).flatMap(day => Object.values(day as DaySchedule).flat());

    // Calculate highlights from template data if not provided
    const highlights = template.highlights || {
        days: template.duration,
        spots: allItems.length,
        tips: allItems.filter(item => item.insiderTip).length,
        rating: template.rating || 4.8,
        usageCount: template.copiedCount || 256
    };

    // Generate day previews from schedule if not provided
    const firstDay = ('morning' in template.schedule)
        ? (template.schedule as DaySchedule)
        : (template.schedule as FullSchedule)['Day 1'] || Object.values(template.schedule as FullSchedule)[0];

    const dayPreviews = template.dayPreviews || [
        { day: 1, summary: (firstDay as DaySchedule)?.morning?.slice(0, 3).map((i: ScheduleItem) => i.title).join(' → ') || '行程安排中...' },
    ];

    // Default whatYouGet
    const whatYouGet = template.whatYouGet || (lang === 'zh' ? [
        t.whatYouGetPlaceholder1 || `完整 ${template.duration} 天行程安排`,
        t.whatYouGetPlaceholder2 || `${highlights.tips} 個在地人私藏秘訣`,
        t.whatYouGetPlaceholder3 || '精確地點、地圖座標、最佳時段',
        t.whatYouGetPlaceholder4 || '避坑指南 (熱門時段/地雷餐廳)',
    ] : [
        t.whatYouGetPlaceholder1En || `Complete ${template.duration}-day itinerary`,
        t.whatYouGetPlaceholder2En || `${highlights.tips} insider tips from locals`,
        t.whatYouGetPlaceholder3En || 'Exact locations, map coordinates, best times',
        t.whatYouGetPlaceholder4En || 'Avoid crowds & tourist traps guide',
    ]);

    // Count hidden items
    const hiddenCount = template.hiddenCount ||
        Object.values(template.schedule).flat().filter((item: ScheduleItem) => item.isLocked).length || 2;

    // City-based gradient for cover placeholder (data-driven)
    const coverGradient = getGradient(template.region);

    // Per-region FAQ content
    type FaqContent = { zh: string; en: string };
    const regionFaqMap: Record<string, { time: FaqContent; transport: FaqContent; advice: FaqContent }> = {
        tokyo: {
            time: { zh: '3月下旬賞櫻、11月賞楓最熱鬧，建議清晨 8 點前抵達熱門景點。', en: 'Late March for cherry blossoms, November for fall foliage. Arrive at popular spots before 8am.' },
            transport: { zh: 'JR Pass 或 IC 卡（Suica/Pasmo）搭地鐵最方便，避開早 8-9 點通勤高峰。', en: 'JR Pass or IC card (Suica/Pasmo) for easy subway access. Avoid rush hour 8-9am.' },
            advice: { zh: '便利商店早餐物美價廉，建議攜帶現金，許多傳統店家不收卡。', en: 'Convenience store breakfasts are great value. Carry cash — many traditional shops are cash only.' },
        },
        kyoto: {
            time: { zh: '4月初人潮最多，建議開門前（9點前）抵達，或選擇工作日前往嵐山竹林。', en: 'April is busiest. Arrive before 9am or visit on weekdays to beat crowds at Arashiyama.' },
            transport: { zh: '市區以公車和地鐵為主，嵐山建議租借腳踏車探索，多日可購買巴士一日券。', en: 'Bus and subway cover most areas. Rent a bike in Arashiyama. A 1-day bus pass is great for multi-stop days.' },
            advice: { zh: '和服租借建議提前預訂，清水寺日落前 1 小時光線最美，拍照最佳。', en: 'Book kimono rentals in advance. Kiyomizudera is most photogenic 1 hour before sunset.' },
        },
        osaka: {
            time: { zh: '道頓堀夜晚最熱鬧，下午 3 點後才逛可避開午間人潮；黑門市場建議週間上午前往。', en: 'Dotonbori is best at night. Visit Kuromon Market on weekday mornings for freshest seafood.' },
            transport: { zh: 'Osaka Amazing Pass 可無限搭乘地鐵並免費進入多項景點，CP 值極高。', en: 'Osaka Amazing Pass offers unlimited subway rides + free entry to many attractions — great value.' },
            advice: { zh: '串炸和燒肉人均約 800-1500 yen，建議避開假日晚餐高峰，排隊時間較長。', en: 'Kushikatsu and yakiniku average ¥800-1500/person. Expect waits on weekend evenings.' },
        },
        taipei: {
            time: { zh: '春秋兩季最宜，象山日落後 30 分鐘是拍 101 夜景的黃金時刻。', en: 'Oct-Nov is ideal. Head to Elephant Mountain 30 min after sunset for the best 101 night views.' },
            transport: { zh: '悠遊卡搭捷運最方便，桃園機場捷運到台北市區約 35 分鐘。', en: 'EasyCard for MRT is best. Airport to city is ~35 min via Taoyuan Airport MRT.' },
            advice: { zh: '夜市攜帶小額現金；九份建議搭公車上山，傍晚燈籠點燈最美。', en: 'Bring small cash for night markets. Take the bus to Jiufen — twilight lanterns are magical.' },
        },
        tainan: {
            time: { zh: '早晨是台南黃金時段！百年早餐老店 7-10 點就座無虛席，建議早起出發。', en: 'Morning is golden hour in Tainan! Century-old breakfast shops fill up 7-10am — rise early.' },
            transport: { zh: '景點密集，租借 YouBike 或步行最適合；市區多為單行道，租車停車較麻煩。', en: 'Rent a YouBike or walk — sights are dense. Driving is tricky with many one-way streets.' },
            advice: { zh: '赤崁樓和安平古堡附近小吃最道地，建議留半天慢逛安平老街。', en: 'Best street food clusters near Chikan Tower and Anping Fort. Allow half a day for Anping Old Street.' },
        },
        hualien: {
            time: { zh: '太魯閣建議早上 8 點前或下午 3 點後進入人潮較少；颱風季（7-9 月）注意封路。', en: 'Enter Taroko before 8am or after 3pm to avoid crowds. Watch for closures during typhoon season (Jul-Sep).' },
            transport: { zh: '花蓮市區租車最方便，太魯閣可搭台灣好行或包車，不建議騎機車進峽谷。', en: 'Rent a car in Hualien city. For Taroko, join a tour or hire a cab — scooters are not advised in the gorge.' },
            advice: { zh: '東大門夜市是在地人最愛，新鮮麻糬必買；峽谷步道請備足水和防曬。', en: 'Dongdamen Night Market is a local favourite. Fresh mochi is a must-buy. Hike with water and sunscreen.' },
        },
        taichung: {
            time: { zh: '彩虹眷村早上 9 點開門，建議平日上午前往；逢甲夜市下午 4 點後逐漸熱鬧。', en: 'Rainbow Village opens at 9am — weekday mornings are crowd-free. Fengjia Night Market picks up after 4pm.' },
            transport: { zh: '市區以公車和 BRT 為主，景點距離較遠，建議租車或共乘。', en: 'City bus and BRT cover major sites. Attractions are spread out — renting a car or ride-sharing is helpful.' },
            advice: { zh: '台中是甜點之都！審計新村和一中街都值得半天探索，預留下午茶時間。', en: 'Taichung is a dessert paradise! Budget half a day for Shen Ji New Village or Yizhong Street.' },
        },
        melbourne: {
            time: { zh: '墨爾本天氣多變「一天四季」，洋蔥式穿法是不二法門，隨身帶薄外套。', en: "Melbourne's weather is famously unpredictable — layer up and always carry a light jacket." },
            transport: { zh: 'Myki 卡搭大眾交通，CBD 免費電車圈範圍廣，機場建議搭 SkyBus 較划算。', en: 'Myki card covers all public transport. Free tram zone covers the CBD. SkyBus is the best-value airport transfer.' },
            advice: { zh: '別點美式咖啡，試試 Flat White！Queen Victoria Market 週一/三公休，出發前確認。', en: 'Order a Flat White like a local! Queen Victoria Market is closed Mon/Wed — check before visiting.' },
        },
    };
    const regionFaq = regionFaqMap[template.region] || {
        time: { zh: '建議清晨或平日前往以避開人潮，旺季請提前確認開放狀況。', en: 'Early mornings or weekdays are best. Confirm opening hours during peak season.' },
        transport: { zh: '大部分景點可透過大眾交通抵達，偏遠地點建議搭計程車或共享單車。', en: 'Most spots are reachable by public transit. For remote areas, taxis or bike-sharing are recommended.' },
        advice: { zh: '攜帶行動電源與舒適步鞋，部分傳統店家僅收現金。', en: 'Bring a power bank and comfortable shoes. Some traditional shops only accept cash.' },
    };
    const faqItems = [
        { id: 'time', title: t.bestTimeToVisit || (lang === 'zh' ? '最佳旅遊時間' : 'Best Time to Visit'), icon: '⏰', text: lang === 'zh' ? regionFaq.time.zh : regionFaq.time.en },
        { id: 'transport', title: t.gettingAround || (lang === 'zh' ? '交通攻略' : 'Getting Around'), icon: '🚌', text: lang === 'zh' ? regionFaq.transport.zh : regionFaq.transport.en },
        { id: 'advice', title: t.expertAdvice || (lang === 'zh' ? '達人私房建議' : 'Expert Advice'), icon: '💡', text: lang === 'zh' ? regionFaq.advice.zh : regionFaq.advice.en },
    ];

    return (
        <div className="fixed inset-0 z-[3000] flex justify-center items-center pointer-events-none p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm pointer-events-auto transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="bg-white w-full max-w-[480px] h-[85vh] max-h-[800px] rounded-[32px] shadow-2xl pointer-events-auto flex flex-col relative overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 ease-out">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                    <X size={18} className="text-gray-600" />
                </button>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto overscroll-contain">

                    {/* ===== 1. COVER IMAGE SECTION ===== */}
                    <div className="relative">
                        {template.coverImage ? (
                            <img
                                src={template.coverImage}
                                alt={template.name}
                                className="w-full h-48 md:h-56 object-cover"
                            />
                        ) : (
                            <div className={`w-full h-48 md:h-56 bg-gradient-to-br ${coverGradient} flex items-center justify-center`}>
                                <div className="text-white/30 text-6xl">
                                    {getRegionEmoji(template.region)}
                                </div>
                            </div>
                        )}
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>

                    {/* ===== 2. TITLE & HIGHLIGHTS ===== */}
                    <div className="px-5 -mt-8 relative z-10">
                        <h1 className="text-2xl font-black text-gray-900 leading-tight mb-3">
                            {lang === 'en'
                                ? (template.titleEn || template.nameEn || template.title || template.name)
                                : (template.title || template.name)}
                        </h1>

                        {/* Highlights Bar */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                                <span className="text-base">📅️</span>
                                <span className="font-medium">{highlights.days} {t.daysCount || (lang === 'zh' ? '天' : 'days')}</span>
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="flex items-center gap-1">
                                <span className="text-base">📍</span>
                                <span className="font-medium">{highlights.spots} {t.spotsCount || (lang === 'zh' ? '景點' : 'spots')}</span>
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="flex items-center gap-1">
                                <span className="text-base">💡</span>
                                <span className="font-medium">{highlights.tips} Tips</span>
                            </span>
                            <span className="text-gray-300">|</span>
                            <span className="flex items-center gap-1">
                                <Star size={12} className="text-amber-400 fill-amber-400" />
                                <span className="font-medium">{highlights.rating}</span>
                                {(highlights.usageCount ?? 0) > 0 && (
                                    <span className="text-gray-400">({highlights.usageCount} {t.usesCount || (lang === 'zh' ? '次套用' : 'uses')})</span>
                                )}
                            </span>
                        </div>

                        {/* Who is this for? */}
                        {template.targetAudience && (
                            <div className="bg-slate-50 flex items-start gap-3 p-3.5 rounded-2xl border border-gray-100 mb-5 text-left">
                                <div className="p-2 bg-white rounded-xl shadow-sm">
                                    <Users size={16} className="text-slate-400" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 leading-none">
                                        {lang === 'zh' ? '適合對象' : 'Who is this for?'}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 mb-2">
                                        {(lang === 'zh' ? template.targetAudience.personas : (template.targetAudience.personasEn || template.targetAudience.personas)).map(p => (
                                            <span key={p} className="text-[10px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded-md border border-gray-100 italic">
                                                #{p}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-slate-500 leading-snug">
                                        {lang === 'zh' ? template.targetAudience.description : (template.targetAudience.descriptionEn || template.targetAudience.description)}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ===== 3. CREATOR CARD ===== */}
                    <div className="px-5 mb-5">
                        <div
                            className={`bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-100 ${onViewCreator ? 'cursor-pointer hover:border-teal-200 transition-colors' : ''}`}
                            onClick={() => onViewCreator && onViewCreator(template.authorId)}
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-200/50">
                                    <User size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-gray-800">
                                            {lang === 'en' && template.authorEn ? template.authorEn : template.author}
                                        </span>
                                        <span className="text-xs text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full font-medium">
                                            {t[`${template.region}Expert`] || getRegionName(template.region, lang === 'en' ? 'en' : 'zh') + (lang === 'zh' ? '達人' : ' Expert')}
                                        </span>
                                    </div>
                                    {template.coverStory?.quote && (
                                        <p className="text-sm text-gray-600 italic leading-relaxed">
                                            "{lang === 'en' && template.coverStory?.quoteEn
                                                ? template.coverStory.quoteEn
                                                : template.coverStory.quote}"
                                        </p>
                                    )}
                                    {template.coverStory?.description && (
                                        <p className="mt-3 text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                                            {template.coverStory.description}
                                        </p>
                                    )}
                                    {/* View More Link */}
                                    {onViewCreator && (
                                        <button
                                            className="mt-2 text-xs text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 group"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onViewCreator(template.authorId);
                                            }}
                                        >
                                            {t.viewMoreTemplates || (lang === 'zh' ? '查看更多模板' : 'View more templates')}
                                            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ===== 4. WHAT YOU'LL GET ===== */}
                    <div className="px-5 mb-5">
                        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Sparkles size={14} className="text-amber-500" />
                            {t.whatYouGetTitle || (lang === 'zh' ? '這個模板讓你獲得' : 'What You\'ll Get')}
                        </h3>
                        <div className="bg-amber-50/50 border border-amber-100 rounded-xl p-4 space-y-2">
                            {whatYouGet.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-sm">
                                    <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== 5. DAY PREVIEW (with daily themes) ===== */}
                    <div className="px-5 mb-5">
                        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <MapPin size={14} className="text-teal-500" />
                            {t.itineraryPreview || (lang === 'zh' ? '行程預覽' : 'Itinerary Preview')}
                        </h3>
                        <div className="space-y-2">
                            {(() => {
                                const isMultiDay = !('morning' in template.schedule);
                                const days = isMultiDay
                                    ? Object.entries(template.schedule as FullSchedule)
                                    : [['Day 1', template.schedule as DaySchedule]];

                                return days.map(([dayKey, daySchedule], idx) => {
                                    const ds = daySchedule as DaySchedule;
                                    const dayItems = [
                                        ...(ds.morning || []),
                                        ...(ds.afternoon || []),
                                        ...(ds.evening || []),
                                    ].filter(item => item && item.title);
                                    const dayNum = idx + 1;
                                    const themeEmoji = ds.themeEmoji || '';
                                    const themeTitle = lang === 'zh'
                                        ? (ds.theme || '')
                                        : (ds.themeEn || ds.theme || '');

                                    return (
                                        <div key={String(dayKey)} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                {themeEmoji && (
                                                    <span className="text-base">{themeEmoji}</span>
                                                )}
                                                <span className="text-xs font-bold text-gray-800">
                                                    Day {dayNum}
                                                </span>
                                                {themeTitle && (
                                                    <>
                                                        <span className="text-gray-300">—</span>
                                                        <span className="text-xs font-medium text-gray-500">
                                                            {themeTitle}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                            <p className="text-sm text-gray-600 flex items-center flex-wrap gap-1">
                                                {dayItems.slice(0, 4).map((item: ScheduleItem, i, arr) => (
                                                    <React.Fragment key={i}>
                                                        <span className="font-medium text-gray-700">{item.title}</span>
                                                        {(i < arr.length - 1 || dayItems.length > 4) && (
                                                            <ArrowRight size={10} className="text-gray-300" />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                                {dayItems.length > 4 && (
                                                    <span className="font-medium text-teal-600">
                                                        +{dayItems.length - 4} {lang === 'zh' ? '景點' : 'spots'}
                                                    </span>
                                                )}
                                                {dayItems.length === 0 && (
                                                    <span className="text-gray-400 italic text-xs">
                                                        {lang === 'zh' ? '自由探索' : 'Free exploration'}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                    </div>

                    {/* ===== 5.1 TRAVEL TIPS ===== */}
                    {template.travelTips && template.travelTips.length > 0 && (
                        <div className="px-5 mb-5 text-left">
                            <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <Sparkles size={14} className="text-amber-500" />
                                {t.travelTipsTitle || (lang === 'zh' ? '旅行小撇步' : 'Travel Tips')}
                            </h3>
                            <div className="space-y-2">
                                {template.travelTips.map((tip, idx) => (
                                    <div key={idx} className="bg-amber-50/30 border border-amber-100/50 rounded-xl p-3 flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-black text-amber-600 shrink-0">
                                            {idx + 1}
                                        </div>
                                        <p className="text-xs text-amber-900/70 leading-relaxed">
                                            {lang === 'zh' ? tip.tip : (tip.tipEn || tip.tip)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ===== 5.2 KNOW BEFORE YOU GO (FAQ) ===== */}
                    <div className="px-5 mb-5 text-left">
                        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <Sparkles size={14} className="text-amber-500" />
                            {t.knowBeforeYouGo || (lang === 'zh' ? '行前必看 (FAQ)' : 'Know Before You Go')}
                        </h3>
                        <div className="space-y-2">
                            {faqItems.map((faq) => (
                                <div key={faq.id} className="border border-gray-100 rounded-xl overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                                        className="w-full flex items-center justify-between p-3 bg-gray-50/50 hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="flex items-center gap-2 text-xs font-bold text-gray-700">
                                            <span>{faq.icon}</span>
                                            {faq.title}
                                        </span>
                                        <ChevronDown size={14} className={`text-gray-400 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openFaq === faq.id && (
                                        <div className="p-3 text-xs text-gray-500 leading-relaxed bg-white border-t border-gray-50 animate-in fade-in slide-in-from-top-1 duration-200">
                                            {faq.text}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== 5.3 AUTHOR STORY ===== */}
                    {template.authorStory && (
                        <div className="px-5 mb-5 text-left">
                            <button
                                onClick={() => setOpenFaq(openFaq === 'authorStory' ? null : 'authorStory')}
                                className="w-full bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-xl p-4 hover:from-teal-100/50 hover:to-cyan-100/50 transition-all"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                                            <User size={14} className="text-teal-600" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-xs font-bold text-teal-800 block">
                                                {lang === 'zh' ? '✍️ 作者小故事' : '✍️ Author Story'}
                                            </span>
                                            <span className="text-[10px] text-teal-500">
                                                {lang === 'zh'
                                                    ? `by ${template.author}`
                                                    : `by ${template.authorEn || template.author}`}
                                            </span>
                                        </div>
                                    </div>
                                    <ChevronDown size={14} className={`text-teal-400 transition-transform ${openFaq === 'authorStory' ? 'rotate-180' : ''}`} />
                                </div>
                                {openFaq === 'authorStory' && (
                                    <div className="mt-3 pt-3 border-t border-teal-100 text-left animate-in fade-in slide-in-from-top-1 duration-200">
                                        <p className="text-xs text-teal-700 leading-relaxed italic">
                                            "{lang === 'zh' ? template.authorStory.zh : template.authorStory.en}"
                                        </p>
                                    </div>
                                )}
                            </button>
                        </div>
                    )}

                    {hiddenCount > 0 && (
                        <div className="px-5 mb-6">
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-xl p-4 relative overflow-hidden">
                                <div className="flex items-center gap-3">
                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/60 backdrop-blur-[6px]" />
                                        <Lock size={20} className="text-purple-500 relative z-10" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-bold text-purple-800 mb-1">
                                            🔒 {t.hiddenGemsCount?.replace('{count}', hiddenCount.toString()) || (lang === 'zh' ? `含 ${hiddenCount} 個隱藏秘密景點` : `Includes ${hiddenCount} hidden gems`)}
                                        </div>
                                        <p className="text-xs text-purple-600">
                                            {t.betaUnlockPrompt || (lang === 'zh'
                                                ? 'Beta 期間免費解鎖，錯過不再！'
                                                : 'Unlock for free during Beta!')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Padding for Sticky Footer */}
                    <div className="h-24" />
                </div>

                {/* ===== 7. STICKY CTA FOOTER ===== */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50">
                    <div className="flex gap-3">
                        {/* Primary CTA */}
                        <button
                            onClick={() => onApply(template)}
                            className="flex-1 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-teal-200/50 hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <CheckCircle2 size={18} />
                            {t.applyNow || (lang === 'zh' ? '一鍵套用' : 'Apply Now')}
                        </button>

                        {/* Secondary CTA - Show only if has locked content */}
                        {isLocked && (
                            <button
                                onClick={() => onUnlock(template)}
                                className="px-4 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-amber-200/50 hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <Lock size={16} />
                                {t.unlockLabel || (lang === 'zh' ? '解鎖專家心得 ($0.99)' : 'Unlock Expert Tips ($0.99)')}
                            </button>
                        )}
                    </div>

                    {/* Beta Badge */}
                    <p className="text-center text-[10px] text-gray-400 mt-2">
                        🎁 {t.betaFreeNotice || (lang === 'zh' ? '目前 Demo 階段限時免費' : 'Currently free during Demo phase')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TemplatePreviewModal;

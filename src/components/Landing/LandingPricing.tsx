import React, { useState } from 'react';
import { LangType } from '../../types';

interface LandingPricingProps {
    lang: LangType;
    onStart: (templateId?: string) => void;
}

const LandingPricing: React.FC<LandingPricingProps> = ({ lang, onStart }) => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <>
            {/* ===== PRICING SECTION (Optimized) ===== */}
            <section id="pricing" className="w-full py-20 px-6 bg-gradient-to-b from-slate-50 to-white z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-4">
                            {lang === 'zh' ? '定價方案' : 'Pricing'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                            {lang === 'zh' ? '簡單透明，沒有隱藏費用' : 'Simple pricing. No surprises.'}
                        </h2>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto">
                            {lang === 'zh' ? '免費版就很強大。需要更多？隨時升級。' : 'Free is powerful. Need more? Upgrade anytime.'}
                        </p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="flex justify-center mb-10">
                        <div className="relative inline-flex items-center bg-slate-100 rounded-full p-1">
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-6 py-2 text-sm font-bold rounded-full transition-all ${!isYearly ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-800'}`}
                            >
                                {lang === 'zh' ? '月付' : 'Monthly'}
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-6 py-2 text-sm font-bold rounded-full transition-all ${isYearly ? 'bg-slate-800 text-white' : 'text-slate-600 hover:text-slate-800'}`}
                            >
                                {lang === 'zh' ? '年付' : 'Yearly'}
                            </button>
                            <span className="absolute -top-3 -right-2 bg-gradient-to-r from-orange-400 to-red-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                                {lang === 'zh' ? '省 33%' : 'SAVE 33%'}
                            </span>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">

                        {/* FREE Plan */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {lang === 'zh' ? '免費版' : 'Free'}
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {lang === 'zh' ? '永久免費，足夠一般使用' : 'Free forever for casual planning'}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-slate-800">$0</span>
                                <span className="text-slate-400">/mo</span>
                                <p className="text-slate-400 text-xs mt-1">&nbsp;</p>
                            </div>

                            <button
                                onClick={() => onStart()}
                                className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all mb-2"
                            >
                                {lang === 'zh' ? '開始使用' : 'Get Started'}
                            </button>
                            <p className="text-center text-slate-400 text-xs mb-6">
                                {lang === 'zh' ? '永久免費！' : "It's Free!"}
                            </p>

                            <ul className="space-y-3 flex-1">
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {lang === 'zh' ? '1 份草稿行程' : '1 draft itinerary'}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {lang === 'zh' ? '每行程 20 個景點' : '20 spots per trip'}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {lang === 'zh' ? '5 個基本模板' : '5 starter templates'}
                                </li>
                                <li className="flex items-center gap-2 text-slate-600 text-sm">
                                    <span className="text-teal-500">✓</span>
                                    {lang === 'zh' ? 'PDF 匯出（有浮水印）' : 'PDF export (watermarked)'}
                                </li>
                            </ul>
                        </div>

                        {/* PRO Plan */}
                        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white flex flex-col relative overflow-hidden">
                            {/* Popular Badge */}
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                                {lang === 'zh' ? '最受歡迎' : 'POPULAR'}
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-bold">
                                    {lang === 'zh' ? '旅行家 Pro' : 'Traveler Pro'}
                                </h3>
                                <p className="text-slate-400 text-sm">
                                    {lang === 'zh' ? '認真規劃的旅人首選' : 'For serious trip planners'}
                                </p>
                            </div>

                            <div className="mb-2">
                                <span className="text-4xl font-extrabold">{isYearly ? '$3.33' : '$4.99'}</span>
                                <span className="text-slate-400">/mo</span>
                            </div>
                            {isYearly && (
                                <p className="text-teal-400 text-xs mb-4">
                                    {lang === 'zh' ? '年付 $39.99（省 $20）' : 'Billed $39.99/year (save $20)'}
                                </p>
                            )}
                            {!isYearly && <div className="h-4 mb-4"></div>}

                            <button
                                onClick={() => onStart()}
                                className="w-full py-3 bg-gradient-to-r from-[#4ECDC4] to-[#44A5A0] text-white font-bold rounded-xl hover:opacity-90 transition-all mb-2"
                            >
                                {lang === 'zh' ? '免費試用 14 天' : 'Start 14-Day Trial'}
                            </button>
                            <p className="text-center text-slate-500 text-xs mb-6">
                                {lang === 'zh' ? '隨時取消 • 不需信用卡' : 'Cancel anytime • No credit card'}
                            </p>

                            <ul className="space-y-3 flex-1">
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    <strong>{lang === 'zh' ? '無限' : 'Unlimited'}</strong>&nbsp;{lang === 'zh' ? '草稿行程' : 'itineraries'}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    <strong>{lang === 'zh' ? '無限' : 'Unlimited'}</strong>&nbsp;{lang === 'zh' ? '景點' : 'spots'}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {lang === 'zh' ? '所有達人模板' : 'All expert templates'}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {lang === 'zh' ? 'PDF 匯出（無浮水印）' : 'PDF export (no watermark)'}
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <span className="text-teal-400">✓</span>
                                    {lang === 'zh' ? '更多達人專屬模板' : 'More expert templates'}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Trust Footer */}
                    <div className="text-center mt-10 text-slate-400 text-sm">
                        {lang === 'zh' ? '🔒 安全付款 • 隨時取消 • 14 天免費試用' : '🔒 Secure payment • Cancel anytime • 14-day free trial'}
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL PROOF SECTION ===== */}
            <section className="w-full py-16 px-6 bg-white z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                        {lang === 'zh' ? '🌍 全球旅人的選擇' : '🌍 Trusted by Travelers Worldwide'}
                    </h2>

                    <div className="flex justify-center items-center gap-2 mb-8">
                        <div className="flex -space-x-3">
                            {['🧑‍💻', '👩‍🎨', '🧔', '👩‍🦰', '🧑‍🍳'].map((emoji, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-white flex items-center justify-center text-lg shadow-sm">
                                    {emoji}
                                </div>
                            ))}
                        </div>
                        <span className="text-slate-500 text-sm ml-2">
                            {lang === 'zh' ? '+更多旅人' : '+more travelers'}
                        </span>
                    </div>

                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-8 border border-teal-100">
                        <p className="text-lg md:text-xl text-slate-700 font-medium mb-4">
                            {lang === 'zh'
                                ? '🚀 我們正在打造下一代旅行規劃工具'
                                : '🚀 We\'re building the next-gen trip planner'}
                        </p>
                        <p className="text-slate-500 text-sm mb-4">
                            {lang === 'zh'
                                ? '目前為 Beta 版，免費試用所有功能。你的回饋將幫助我們變得更好！'
                                : 'Currently in Beta — try all features free. Your feedback helps us improve!'}
                        </p>
                        <button
                            onClick={() => onStart()}
                            className="px-6 py-2 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 transition-all text-sm"
                        >
                            {lang === 'zh' ? '免費試用 Beta 版' : 'Try Beta Free'}
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== FAQ SECTION ===== */}
            <section className="w-full py-16 px-6 bg-slate-50 z-10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-12">
                        {lang === 'zh' ? '常見問題' : 'Frequently Asked Questions'}
                    </h2>

                    <div className="space-y-4">
                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? '免費試用後會自動扣款嗎？' : 'Will I be charged after the free trial?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '不會！免費試用期間不需要輸入信用卡資訊。試用結束後，您可以選擇升級或繼續使用免費版。'
                                    : "No! You won't need to enter credit card info during the trial. After the trial, you can choose to upgrade or continue with the free plan."}
                            </p>
                        </details>

                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? '可以隨時取消訂閱嗎？' : 'Can I cancel my subscription anytime?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '當然可以！您可以隨時在設定中取消訂閱，不會有任何隱藏費用。'
                                    : 'Absolutely! You can cancel anytime from your settings. No hidden fees, no hassle.'}
                            </p>
                        </details>

                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? '我的行程資料儲存在哪裡？' : 'Where is my trip data stored?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '目前 Beta 版本的資料儲存在您的瀏覽器本地。雲端同步功能正在開發中，即將推出！'
                                    : 'Currently in Beta, your data is stored locally in your browser. Cloud sync is coming soon!'}
                            </p>
                        </details>

                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? '可以和朋友一起規劃行程嗎？' : 'Can I plan trips with friends?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '協作功能正在開發中！目前您可以透過分享連結讓朋友查看行程，即時共編功能即將推出。'
                                    : 'Collaboration is in development! Currently you can share trip links for viewing. Real-time co-editing is coming soon.'}
                            </p>
                        </details>

                        <details className="bg-white rounded-xl p-5 shadow-sm group">
                            <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800">
                                {lang === 'zh' ? 'PDF 匯出的浮水印是什麼？' : 'What is the PDF watermark?'}
                                <span className="text-teal-500 group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                                {lang === 'zh'
                                    ? '免費版匯出的 PDF 會包含小型 TravelCanvas Logo 浮水印。升級 Pro 即可獲得無浮水印的乾淨版本。'
                                    : 'Free PDF exports include a small TravelCanvas logo. Upgrade to Pro for clean, watermark-free exports.'}
                            </p>
                        </details>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA SECTION ===== */}
            <section className="w-full py-16 px-6 bg-gradient-to-r from-[#4ECDC4] to-[#44A5A0] z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {lang === 'zh' ? '準備好開始你的旅程了嗎？' : 'Ready to Start Your Journey?'}
                    </h2>
                    <p className="text-white/80 mb-8">
                        {lang === 'zh' ? '免費開始，無需信用卡' : 'Start free, no credit card required'}
                    </p>
                    <button
                        onClick={() => onStart()}
                        className="px-8 py-4 bg-white text-[#4ECDC4] font-bold text-lg rounded-full hover:bg-white/90 transition-all shadow-lg"
                    >
                        {lang === 'zh' ? '免費開始規劃 →' : 'Start Planning for Free →'}
                    </button>
                </div>
            </section>
        </>
    );
};

export default LandingPricing;

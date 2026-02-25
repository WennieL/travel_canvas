import React, { useState, useEffect } from 'react';
import { Template, LangType, Region } from '../types';
import CityPicker from './Discovery/CityPicker';
import CityHub from './Discovery/CityHub';

interface DiscoveryViewProps {
    onPreviewTemplate: (tpl: Template) => void;
    onStoryPreview: (tpl: Template) => void;
    onExploreCreatorMap: (authorId: string, authorName: string) => void;
    onCreatorClick: (creatorId: string) => void;
    setActiveTab: (tab: 'assets' | 'templates') => void;
    activeRegion: Region;
    setActiveRegion: (region: Region) => void;
    showToastMessage: (msg: string, type: any) => void;
    toggleLang: () => void;
    lang: LangType;
    t: any;
    pendingWizardData?: any;
    setPendingWizardData?: (data: any) => void;
}

const DiscoveryView: React.FC<DiscoveryViewProps> = ({
    onPreviewTemplate,
    onStoryPreview,
    onExploreCreatorMap,
    onCreatorClick,
    setActiveTab,
    activeRegion,
    setActiveRegion,
    showToastMessage,
    toggleLang,
    lang,
    t,
    pendingWizardData,
    setPendingWizardData
}) => {
    // Current view state: null = Picker, Region = Hub
    const [discoveryCity, setDiscoveryCity] = useState<Region | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (pendingWizardData?.destination && !discoveryCity) {
            setDiscoveryCity(pendingWizardData.destination);
            setActiveRegion(pendingWizardData.destination);
        }
    }, [pendingWizardData, discoveryCity, setActiveRegion]);

    const handleCitySelect = (region: Region) => {
        setDiscoveryCity(region);
        setActiveRegion(region); // Sync with app state
    };

    return (
        <div className="flex-1 bg-white overflow-y-auto scrollbar-hide">
            {discoveryCity ? (
                <CityHub
                    regionId={discoveryCity}
                    onBack={() => setDiscoveryCity(null)}
                    onPreviewTemplate={onPreviewTemplate}
                    onStoryPreview={onStoryPreview}
                    onCreatorClick={onCreatorClick}
                    lang={lang}
                    t={t}
                />
            ) : (
                <CityPicker
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onSelectCity={handleCitySelect}
                    onPreviewTemplate={onPreviewTemplate}
                    lang={lang}
                    t={t}
                />
            )}
        </div>
    );
};

export default DiscoveryView;

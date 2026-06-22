'use client'

import { memo } from "react";
import ProfileStat from "./stat";
import { useLang } from "@/contexts/lang/langContext";


function ProfileStats() {

    const { t } = useLang()

    return (
        <div className="grid-user-stats mt-5">
            <ProfileStat
                title={t.stats.buried}
                value="23"
                icon="/icons/icon-graveyard.png"
            />
            <ProfileStat
                title={t.stats.archived}
                value="17"
                icon="/icons/icon-box.png"
            />
            <ProfileStat
                title={t.stats.stars}
                value="123"
                icon="/icons/icon-star.png"
            />
            <ProfileStat
                title={t.stats.last_activity}
                value="2 days ago"
                icon="/icons/icon-time.png"
            />
        </div>
    )
}

export default memo(ProfileStats);
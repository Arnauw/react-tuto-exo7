import {PictureIcon} from "./svgs/PictureIcon.jsx";
import {GifIcon} from "./svgs/GifIcon.jsx";
import {PollIcon} from "./svgs/PollIcon.jsx";
import {EmojiIcon} from "./svgs/EmojiIcon.jsx";
import {ScheduleIcon} from "./svgs/ScheduleIcon.jsx";
import {LocationIcon} from "./svgs/LocationIcon.jsx";

export const ActionBar = () => {
    return (
        <>
            <div className="flex items-center gap-x-1 text-sky-500">
                <div className="p-2 rounded-full hover:bg-sky-900/50 cursor-pointer">
                    <PictureIcon></PictureIcon>
                </div>
                <div className="p-2 rounded-full hover:bg-sky-900/50 cursor-pointer">
                    <GifIcon></GifIcon>
                </div>
                <div className="p-2 rounded-full hover:bg-sky-900/50 cursor-pointer">
                    <PollIcon></PollIcon>
                </div>
                <div className="p-2 rounded-full hover:bg-sky-900/50 cursor-pointer">
                    <EmojiIcon></EmojiIcon>
                </div>
                <div className="p-2 rounded-full hover:bg-sky-900/50 cursor-pointer">
                    <ScheduleIcon></ScheduleIcon>
                </div>
                <div className="p-2 rounded-full hover:bg-sky-900/50 cursor-pointer">
                    <LocationIcon></LocationIcon>
                </div>
            </div>
        </>
    )
}

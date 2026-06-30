
import pfpImage from '../assets/pfp.png';
import cameraIcon from '../assets/camera.svg';

export default function ProfileScreen({ userData }) {
    return (
       
        <div className="flex h-full w-full flex-col bg-bg-main justify-between font-rubik text-text-main">

           
            <div className="flex-1">

                
                <div className="w-full border-b border-gray-100 px-5 py-4 bg-white sticky top-0 z-10">
                    <h2 className="text-[18px] font-medium tracking-tight text-text-main">
                        Account Settings
                    </h2>
                </div>

                {/* 2. User Profile Details Container */}
                <div className="px-5 pt-6 flex flex-col gap-4">

                    {/* Avatar & Text Header Block */}
                    <div className="flex items-center gap-4">

                        {/* Avatar image frame block */}
                        <div className="relative w-[64px] h-[64px] flex-shrink-0">
                            <img
                                src={pfpImage}
                                alt="Marry Doe"
                                className="w-full h-full rounded-full object-cover"
                            />
                            <img
                                src={cameraIcon}
                                alt="Camera Icon"
                                className="absolute right-0 bottom-0 w-6 h-6 object-contain"
                            />
                        </div>

                        {/* Typography fields using your #1D2226 text color variable */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[15px] font-medium leading-[19px] text-text-main">
                                {userData.name}
                            </h3>
                            <p className="text-[14px] text-gray-500 mt-0.5">
                                {userData.email}
                            </p>
                        </div>
                    </div>

                    {/* Bio text block description */}
                    <p className="text-[14px] text-gray-600 leading-[20px] pt-2">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>



                </div>


                <div className="w-full border-t border-dashed border-gray-300 mt-6"></div>



            </div>

            {/* Bottom Segment */}
            <div>
                {/* 3. The Dashed Border Divider */}
                <div className="w-full border-t border-dashed border-gray-300"></div>

                {/* The 10px spacing block underneath mirroring layout spacing */}
                <div className="h-[30px] w-full bg-bg-main"></div>
            </div>

        </div>
    );
}
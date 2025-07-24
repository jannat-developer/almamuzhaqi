'use client';

import React, { useState } from 'react';
import AiNavbar from './AiNavbar';
import { BsFillSendFill } from 'react-icons/bs';
import { GrAttachment } from 'react-icons/gr';

const ProjectPlanPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    setIsEditing(false);
    // Save logic...
  };
  const handleBackClick = () => setIsEditing(false);

  return (
    <div className=" min-h-screen bg-[#F9FAFB]">
      <AiNavbar
        rightButtons={
          isEditing ? (
            <>

              <button
                onClick={handleBackClick}
                className=" px-16 py-2 rounded-lg text-accent font-medium border border-accent"
              >
                Back
              </button>

              <button
                onClick={handleSaveClick}
                className="bg-primary px-10 py-2 rounded-lg text-accent font-medium"
              >
                Save as Word
              </button>
            </>
          ) : (
            <button
              onClick={handleEditClick}
              className="bg-primary px-10 py-2 rounded-lg text-accent font-medium"
            >
              Edit and Save
            </button>
          )
        }
      />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <p className='text-[24px] font-medium text-accent text-center mb-8'>✨ Congratulations! Your Business Plan Is Ready!</p>
        <h2 className="text-[2rem] font-medium mb-4">Business Overview</h2>
        <p className="text-xl font-regular mb-12">
          Lorem ipsum dolor sit amet consectetur. Habitasse porta cursus magna odio consequat odio semper. Diam elit eget gravida hac nisl. Enim dolor proin massa egestas suspendisse convallis id et aliquet. Mauris lobortis ut arcu ut elementum.Fames pretium cursus feugiat felis consectetur ornare tempus. Bibendum vitae ut ipsum sociis natoque dignissim a. Fermentum velit curabitur adipiscing senectus. Turpis egestas ante libero congue proin eget fermentum. Id nibh a arcu quis quis.Euismod nulla a blandit magna viverra. Pellentesque lacus fermentum cursus in amet non leo amet. Mattis tincidunt vitae rhoncus non ac sit. Eros interdum sed vel odio maecenas. A sit convallis tellus laoreet blandit pellentesque magna mi.Sed sit nisi viverra lacus sit. Diam eu ullamcorper diam vestibulum convallis feugiat iaculis euismod libero. Semper scelerisque vestibulum blandit aliquet tincidunt. Amet et lorem congue morbi quam gravida. Pellentesque morbi est vehicula ridiculus a arcu in. Sit hendrerit risus lacus enim vulputate convallis. Lacus volutpat pharetra convallis netus vitae dignissim orci non. Id vitae condimentum viverra nisl sed tristique dolor consectetur sapien. Amet morbi diam libero ultricies. Et ullamcorper tortor imperdiet auctor integer facilisis. Morbi posuere aenean quisque porttitor vel vitae purus.
        </p>


        <h2 className="text-[2rem] font-medium mb-4">Business Origins</h2>
        <p className="text-xl font-regular mb-12 ">
          Lorem ipsum dolor sit amet consectetur. Habitasse porta cursus magna odio consequat odio semper. Diam elit eget gravida hac nisl. Enim dolor proin massa egestas suspendisse convallis id et aliquet. Mauris lobortis ut arcu ut elementum.Fames pretium cursus feugiat felis consectetur ornare tempus. Bibendum vitae ut ipsum sociis natoque dignissim a. Fermentum velit curabitur adipiscing senectus. Turpis egestas ante libero congue proin eget fermentum. Id nibh a arcu quis quis.Euismod nulla a blandit magna viverra. Pellentesque lacus fermentum cursus in amet non leo amet. Mattis tincidunt vitae rhoncus non ac sit. Eros interdum sed vel odio maecenas. A sit convallis tellus laoreet blandit pellentesque magna mi.Sed sit nisi viverra lacus sit. Diam eu ullamcorper diam vestibulum convallis feugiat iaculis euismod libero. Semper scelerisque vestibulum blandit aliquet tincidunt. Amet et lorem congue morbi quam gravida. Pellentesque morbi est vehicula ridiculus a arcu in. Sit hendrerit risus lacus enim vulputate convallis. Lacus volutpat pharetra convallis netus vitae dignissim orci non. Id vitae condimentum viverra nisl sed tristique dolor consectetur sapien. Amet morbi diam libero ultricies. Et ullamcorper tortor imperdiet auctor integer facilisis. Morbi posuere aenean quisque porttitor vel vitae purus.
        </p>


        <h2 className="text-[2rem] font-medium mb-4">Competitive Advantage</h2>
        <p className="text-xl font-regular mb-12">
          Lorem ipsum dolor sit amet consectetur. Habitasse porta cursus magna odio consequat odio semper. Diam elit eget gravida hac nisl. Enim dolor proin massa egestas suspendisse convallis id et aliquet. Mauris lobortis ut arcu ut elementum.Fames pretium cursus feugiat felis consectetur ornare tempus. Bibendum vitae ut ipsum sociis natoque dignissim a. Fermentum velit curabitur adipiscing senectus. Turpis egestas ante libero congue proin eget fermentum. Id nibh a arcu quis quis.Euismod nulla a blandit magna viverra. Pellentesque lacus fermentum cursus in amet non leo amet. Mattis tincidunt vitae rhoncus non ac sit. Eros interdum sed vel odio maecenas. A sit convallis tellus laoreet blandit pellentesque magna mi.Sed sit nisi viverra lacus sit. Diam eu ullamcorper diam vestibulum convallis feugiat iaculis euismod libero. Semper scelerisque vestibulum blandit aliquet tincidunt. Amet et lorem congue morbi quam gravida. Pellentesque morbi est vehicula ridiculus a arcu in. Sit hendrerit risus lacus enim vulputate convallis. Lacus volutpat pharetra convallis netus vitae dignissim orci non. Id vitae condimentum viverra nisl sed tristique dolor consectetur sapien. Amet morbi diam libero ultricies. Et ullamcorper tortor imperdiet auctor integer facilisis. Morbi posuere aenean quisque porttitor vel vitae purus.
        </p>







        {isEditing && (

          <div className="fixed bottom-12 left-0 w-full z-50 rounded-[30px] transition-all duration-300 animate-slide-up">

            <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-[30px] border border-gray-300">
              <h2 className="text-xl font-normal bg-[#EBFBFF]  rounded-t-[30px]  p-6 ">What would you like to change about the Executive Summary above?</h2>



              <div className="flex items-center justify-between px-6 py-4 bg-white rounded-b-[30px] gap-4 border-t-gray-300 border-t">
                {/* Attachment Icon */}
                <div className="bg-[#EBFBFF] rounded-full p-2 cursor-pointer">
                  <GrAttachment />
                </div>

                {/* Textarea */}
                <div className="flex-grow">
                  <textarea
                    rows={1}
                    placeholder="Make the plan more acurate."
                    className="w-full p-2 text-[1rem] font-medium rounded-md resize-none focus:outline-none"
                  />
                </div>

                {/* Send Icon */}
                <div>
                  <BsFillSendFill className="text-primary text-2xl cursor-pointer" />
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectPlanPage;

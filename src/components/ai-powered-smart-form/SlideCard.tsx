type SlideProps = {
  slide: {
    title: string;
    companyName: string;
    companyTag: string;
    content: string;
  };
  index: number;
  total: number;
};

export default function SlideCard({ slide, index, total }: SlideProps) {
  return (
    <div className="bg-white p-16 rounded-lg shadow-lg max-w-[1440px] w-full min-h-[600px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[3rem] font-normal text-accent">{slide.companyName}<span className="text-[1rem] font-medium text-accent ml-2">{slide.companyTag}</span></h2>
        </div>
        <div className="text-[1rem] font-medium text-info">Slide 0{index + 1} out of 0{total}</div>
      </div>

      <h3 className="text-[2.3rem] font-medium text-accent mb-4">{slide.title}</h3>

      <p className="text-accent text-[20px] font-regular  ">
        {slide.content}
      </p>
    </div>
  );
}

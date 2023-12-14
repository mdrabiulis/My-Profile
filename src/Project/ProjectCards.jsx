

const ProjectCards = ({ imeags, title }) => {
  return (
    <div>
      
        <div className="w-[380px] h-[315px] card bg-base-100 shadow-xl ">
          <div className=" items-center justify-around ">
            <img
              src={imeags}
              alt={title}
              className="w-[410px] h-[245px] mx-auto rounded-md "
            />
            <h2 className=" card-title justify-center mt-5">{title}</h2>
          </div>
        </div>
     
    </div>
  );
};

export default ProjectCards;

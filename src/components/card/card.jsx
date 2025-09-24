export const Card = ({ title, children }) => {
  return (
    <div className="borderAll rounded-lg">
      {" "}
      <div className="  bg-white dark:bg-gray-800 shadow-md rounded-lg p-1  hover:shadow-xl transition-shadow duration-300 ">
        <h3 className="text-xl font-semibold text-center  text-primary mb-4 mt-4">
          {title}
        </h3>
        <img
          className="h-full w-full object-cover rounded-md "
          alt=""
        />
        <div className="p-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-justify">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export const CardProjects = ({ title, children, img }) => {
  return (
    <div className="borderAll rounded-lg">
      {" "}
      <div className=" bg-white dark:bg-gray-800 shadow-md rounded-lg p-1 text-justify ">
        <img
          className="h-full w-full object-cover rounded-md transition-transform duration-500 group-hover:scale-110"
          src={img}
          alt=""
        />
        <div className="p-4 md:p6 ">
          {" "}
          <h3 className="text-xl font-semibold text-center text-white my-4 ">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex  flex-col items-center">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export const CardAbout = ({ title, children, img }) => {
  return (
    <div className="borderAll rounded-lg">
      {" "}
      <div className=" bg-white dark:bg-gray-800 shadow-md rounded-lg text-justify  w-full">
        <img
          className="w-full h-full  object-cover rounded-md"
          src={img}
          alt=""
        />
        <div className="p-4 md:p6">
          {" "}
          <h3 className="text-xl font-semibold text-center text-white my-4 ">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex items-center">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const GetActivities = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/`
        );
        console.log("activities", response.data);
        if (response.data.success) {
          setData(response.data.activities);
          console.log(response.data.activities);
        } else {
          console.error("Failed to fetch data:", response.data.message);
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error(error.message);
        }
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleView = (id) => {
    console.log("View item:", id);
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/${id}`,
        {
          headers: { Authorization: token },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        // Update the state to reflect the deleted item
        setData(data.filter((activity) => activity._id !== id));
      } else {
        console.error("Failed to delete item:", response.data.message);
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
      console.error(error);
    }
  };

  return (

    <>
    <div className="pagebox">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <h3 className="d-flex justify-content-center py-4">
          <span className="d-none d-lg-block border-bottom border-danger border-2">
            All Activities
          </span>
        </h3>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">Image</th>
                  <th className="text-center">Title</th>
                  <th className="text-center">Category</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">
                      <img
                        src={`${
                          import.meta.env.VITE_SERVERAPI
                        }/${item.image.replace(/\\/g, "/")}`}
                        alt={item.title}
                        width="100"
                        className="img-fluid rounded"
                      />
                    </td>
                    <td className="">
                      <p className="text-start">{item.title}</p>
                    </td>
                    <td className="text-center">
                      <span>{item.category?.title?  item.category.title : "Please specify category for this activity"}</span>
                    </td>
                    <td className="text-center">
                      <span>
                        {(() => {
                          const date = new Date(item.createdAt);
                          const options = {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          };
                          const formattedDate = date
                            .toLocaleDateString("en-US", options)
                            .split(", ");

                          return `${formattedDate[1]} ${formattedDate[0]}, ${formattedDate[2]}`;
                        })()}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-info btn-sm mx-1"
                        onClick={() => handleView(item._id)}
                      >
                        <Link to={`./${item._id}`}>
                          <i className="bi bi-eye"></i>
                        </Link>
                      </button>
                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => handleDelete(item._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>

    </>

  );
};

export default GetActivities;

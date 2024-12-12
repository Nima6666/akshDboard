import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const GetTestimonial = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/testimonial`
        );
        console.log("testimonials", response.data.testimonial);
        if (response.data.success) {
          setData(response.data.testimonial);
          console.log(response.data.testimonial);
        } else {
          console.error("Failed to fetch data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/testimonial/${id}`,
        {
          headers: { Authorization: token },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);

        // Update the state to reflect the deleted item
        setData((prevData) => prevData.filter((item) => item._id !== id));
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
    <div className="pagebox">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <h3 className="d-flex justify-content-center py-4">
          <span className="d-none d-lg-block border-bottom border-danger border-2">
            All Testimonials
          </span>
        </h3>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped table-bordered ">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">Image</th>
                  <th className="text-center">Title</th>
                  <th className="text-center">Parent Name</th>
                  <th className="text-center">Feedback</th>
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
                        className="img-fluid rounded"
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          objectFit: "cover",
                          cursor: "pointer",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </td>
                    <td className="text-center">
                      <span>{item.title}</span>
                    </td>
                    <td className="text-center">
                      <span>{item.parentname}</span>
                    </td>
                    <td className="text-center">
                      <span>{item.feedback}</span>
                    </td>

                    <td className="text-center">
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
  );
};

export default GetTestimonial;

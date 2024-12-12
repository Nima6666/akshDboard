import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ThreeDGallery = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/three/getallthreedimg`
        );
        if (response.data.success) {
          setData(response.data.gallery);
        } else {
          console.error("Failed to fetch data:", response.data.message);
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

    fetchData();
  }, []);

  const handleView = (id) => {
    console.log("View item:", id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/three/deletethreedimg/${id}`,
        {
          headers: { Authorization: token },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setData(data.filter((item) => item._id !== id));
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
      <section className="min-vh-100 d-flex flex-column align-items-center justify-content-start py-4">
        <h3 className="d-flex justify-content-center pt-2">
          <span className="border-bottom border-success text-success border-2 fw-semibold">
            3D Photos
          </span>
        </h3>
        <div className="container mt-4">
          <div className="table-responsive">
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">Image</th>
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
                        }/${item.images[0].replace(/\\/g, "/")}`}
                        alt={item.title}
                        className="img-fluid rounded"
                        style={{
                          maxWidth: "150px",
                          maxHeight: "150px",
                          objectFit: "cover",
                          cursor: "pointer",
                          transition: "transform 0.3s ease",
                        }}
                        onClick={() => handleView(item.id)}
                      />
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-info btn-md text-white mx-1"
                        onClick={() => handleView(item.id)}
                      >
                        <i className="bi bi-eye"></i>
                      </button>

                      <button
                        className="btn btn-danger btn-md mx-1"
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

export default ThreeDGallery;

import { VStack, useColorMode } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDocs } from "../../redux/actions";
import style from "./ShareInfo.module.css";

const ShareInfo = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const history = useHistory();

  const [form, setForm] = useState({
    doc_name: "",
    doc_image: "",
    doc_topic: "",
    doc_content: "",
    doc_author: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    axios
      .post("/doc", form)
      .then((res) => {
        alert("Info shared succesfully");
        history.push("/docs");
        dispatch(getDocs());
      })
      .catch((err) => {
        alert("There was an error, try again");
      });
  };

  return (
    <VStack className={style.body}>
      <VStack
        mt={["400px", "250px", "200px", "125px", "125px"]}
        bgColor={colorMode === "dark" ? "gray.200" : "gray.800"}
        color={colorMode === "dark" ? "gray.800" : "gray.200"}
        className={style.container}
      >
        <div className={style.title}>
          <h1>Share your info</h1>
        </div>
        <form className={style.form} onSubmit={submitHandler}>
          <label>Author:</label>
          <input
            autoComplete="off"
            type="text"
            name="doc_author"
            placeholder="Escribe tu nombre"
            value={form.doc_author}
            onChange={changeHandler}
          />

          <label>Image(Optional):</label>
          <input
            autoComplete="off"
            type="url"
            name="doc_image"
            placeholder="Agrega url de imagen"
            value={form.doc_image}
            onChange={changeHandler}
          />

          <label>Name:</label>
          <input
            autoComplete="off"
            type="text"
            name="doc_name"
            placeholder="Dale un nombre al doc"
            required
            value={form.doc_name}
            onChange={changeHandler}
          />

          <label>Topic:</label>
          <input
            autoComplete="off"
            type="text"
            name="doc_topic"
            placeholder="Elige el tema del doc"
            required
            value={form.doc_topic}
            onChange={changeHandler}
          />

          <label>Content:</label>
          <textarea
            className={style.textarea}
            id="content"
            name="doc_content"
            required
            value={form.doc_content}
            onChange={changeHandler}
          ></textarea>
          <div>
            <button className={style.button} type="submit">
              POST
            </button>
          </div>
        </form>
      </VStack>
    </VStack>
  );
};

export default ShareInfo;

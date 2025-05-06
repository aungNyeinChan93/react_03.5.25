import React from "react";
import testStyle from "../styles/test.module.css";

class Style extends React.Component {
    state = {
        name: "",
    };

    render() {
        const styles = {
            header: {
                color: "red",
            },
        };
        return (
            <React.Fragment>
                <div style={{ ...styles.header, background: "green" }}>
                    Style Component
                </div>
                <p className={testStyle.primary}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas
                    odio quisquam eos odit at maiores cum tempore natus eligendi quo
                    deleniti nesciunt eius, ipsam voluptate ut optio minima neque!
                </p>
                <p className={testStyle.secondary}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quas
                    odio quisquam eos odit at maiores cum tempore natus eligendi quo
                    deleniti nesciunt eius, ipsam voluptate ut optio minima neque!
                </p>

                <div className={testStyle.primaryCard}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus tenetur iusto facilis sit commodi nobis laudantium aliquam nisi quidem voluptate,
                    molestias natus dicta sapiente itaque voluptatibus eligendi quisquam asperiores autem.
                </div>

                <button className={testStyle.primaryBtn}>Btn</button>
                <p className={testStyle.danger}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nemo accusantium at qua
                    e quibusdam unde magnam, deserunt exercitationem fugit blanditiis reiciendis iure rem veniam in
                    . Provident molestias officiis nihil harum.
                </p>
            </React.Fragment>
        );
    }
}

export default Style;

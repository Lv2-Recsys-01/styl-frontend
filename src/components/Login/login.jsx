import React, { useState } from "react";
import Modal from "react-modal";
import "./login.css";

Modal.setAppElement("#root");

function Login({ closeModal }) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("10초면 가입할 수 있어요!");
    const [mode, setMode] = useState("login");
    const wrong = title === "wrong";

    const handleLogin = () => {
        // TODO: 로그인 처리 로직 작성
        console.log(`ID: ${id}, Password: ${password}`);
        // 로그인했으면 통과

        //실패시 재시도
        setTitle("wrong");
    };

    return (
        <Modal isOpen={true} onRequestClose={closeModal} shouldCloseOnOverlayClick={true} className="modal" overlayClassName="modal-overlay">
            <div className="background">
                {title === "wrong" ? <h2 className={`wrong`}>다시 시도해주세요!</h2> : <h2 className="title">10초면 가입할 수 있어요!</h2>}
                <div className="box">
                    ID
                    <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="box">
                    Password
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="box">
                    <button onClick={handleLogin}>로그인</button>
                </div>

                <div className="option">
                    <p>
                        <a
                            href="회원가입"
                            onClick={function (event) {
                                event.preventDefault();
                            }}
                        >
                            회원가입
                        </a>
                    </p>
                    <p>
                        <a href="/Journey">로그인 없이 사용할래요</a>
                    </p>
                </div>
            </div>
        </Modal>
    );
}

export default Login;

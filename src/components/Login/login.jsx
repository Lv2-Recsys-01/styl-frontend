import React, { useState } from "react";
import Modal from "react-modal";
import "./login.css";
import { NavLink } from "react-router-dom";

Modal.setAppElement("#root");

function Login({ closeModal }) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("first");
    const [mode, setMode] = useState("login");
    const [confirm, setConfirm] = useState("");

    const handleIdChange = (e) => {
        const value = e.target.value;
        setId(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleConfirmChange = (e) => {
        const value = e.target.value;
        setConfirm(value);
    };

    const isSignUpDisabled = id.length < 4 || password.length !== 4;

    const isSignInDisabled = id.length < 4 || password.length !== 4 || confirm.length !== 4 || password !== confirm;

    const handleLogin = () => {
        // TODO: 로그인 처리 로직 작성
        console.log(`ID: ${id}, Password: ${password}`);
        // 로그인했으면 통과

        //실패시 재시도
        setTitle("wrong");
        setPassword("");
        setConfirm("");
    };

    const handleSignin = () => {
        // TODO: 회원가입 처리 로직 작성
        console.log(`ID: ${id}, Password: ${password}`);

        //실패시 재시도
        setTitle("wrong");
        setPassword("");
        setConfirm("");
    };

    if (mode === "login") {
        return (
            <Modal
                isOpen={true}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="background">
                    {title === "wrong" ? (
                        <h2 className={`wrong`}>다시 시도해주세요!</h2>
                    ) : (
                        <h2 className="title">10초면 가입할 수 있어요!</h2>
                    )}
                    <div className="box">
                        ID
                        <input type="text" placeholder="ID" value={id} onChange={handleIdChange} maxLength={10} />
                    </div>
                    <div className="box">
                        Password (4자리 숫자)
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            maxLength={4}
                        />
                    </div>
                    <div className="box">
                        <button
                            onClick={handleLogin}
                            disabled={isSignUpDisabled}
                            className={`signup-button ${isSignUpDisabled ? "disabled" : ""}`}
                        >
                            로그인
                        </button>
                    </div>

                    <div className="option">
                        <p>
                            <a
                                onClick={function (event) {
                                    event.preventDefault();
                                    setMode("signin");
                                    setId("");
                                    setPassword("");
                                    setConfirm("");
                                    setTitle("first");
                                }}
                            >
                                회원가입할래요
                            </a>
                        </p>
                        <p>
                            <NavLink to="/journey">로그인 없이 사용할래요</NavLink>
                        </p>
                    </div>
                </div>
            </Modal>
        );
    } else if (mode === "signin") {
        return (
            <Modal
                isOpen={true}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                className="modal"
                overlayClassName="modal-overlay"
            >
                <div className="background">
                    {title === "wrong" ? (
                        <h2 className={`wrong`}>다시 시도해주세요!</h2>
                    ) : (
                        <h2 className="title">10초면 가입할 수 있어요!</h2>
                    )}
                    <div className="box">
                        ID (10자리 이내, 소문자와 숫자)
                        <input type="text" placeholder="ID" value={id} onChange={handleIdChange} maxLength={10} />
                    </div>
                    <div className="box">
                        Password (4자리 숫자)
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            maxLength={4}
                        />
                    </div>
                    <div className="box">
                        Confirm Password
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirm}
                            onChange={handleConfirmChange}
                            maxLength={4}
                        />
                    </div>
                    <div className="box">
                        <button
                            onClick={handleSignin}
                            disabled={isSignInDisabled}
                            className={`signin-button ${isSignInDisabled ? "disabled" : ""}`}
                        >
                            회원가입
                        </button>
                    </div>

                    <div className="option">
                        <p>
                            <a
                                onClick={function (event) {
                                    event.preventDefault();
                                    setMode("login");
                                    setId("");
                                    setPassword("");
                                    setConfirm("");
                                    setTitle("first");
                                }}
                            >
                                로그인할래요
                            </a>
                        </p>
                        <p>
                            <NavLink to="/journey">로그인 없이 사용할래요</NavLink>
                        </p>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Login;

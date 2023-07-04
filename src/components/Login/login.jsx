import React, { useState } from "react";
import Modal from "react-modal";
import "./login.css";
import { NavLink } from "react-router-dom";

Modal.setAppElement("#root");

function GoToLoginLessNav() {
    return (
        <p>
            <NavLink to="/journey">로그인 없이 사용할래요</NavLink>
        </p>
    );
}

function Login({ closeModal = () => {} }) {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [modalMode, setModalMode] = useState("login");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState(false);

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

    const loginValidationCondition = id.length < 4 || password.length !== 4;
    const signinValidationCondition =
        id.length < 4 || password.length !== 4 || confirm.length !== 4 || password !== confirm;

    const clearInput = () => {
        setPassword("");
        setConfirm("");
    };

    const handleLogin = () => {
        // TODO: 로그인 처리 로직 작성
        console.log(`ID: ${id}, Password: ${password}`);

        if (!loginValidationCondition) {
            clearInput();
            setError("검증에 실패했어요");
        }
    };

    const handleSignin = () => {
        // TODO: 회원가입 처리 로직 작성
        console.log(`ID: ${id}, Password: ${password}`);

        if (!signinValidationCondition) {
            clearInput();
            setError("검증에 실패했어요");
        }
    };

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={false}
            className="modal"
            overlayClassName="modal-overlay"
        >
            {modalMode === "login" ? (
                <div className="background">
                    <h2 className="title">10초면 가입할 수 있어요!</h2>
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
                            // disabled={loginValidationCondition}
                            className={`signup-button ${loginValidationCondition ? "disabled" : ""}`}
                        >
                            로그인
                        </button>
                    </div>

                    {error && <p className="error">{error}</p>}

                    <div className="option">
                        <p
                            onClick={function (event) {
                                event.preventDefault();
                                setModalMode("signin");
                                setId("");
                                setPassword("");
                                setConfirm("");
                            }}
                        >
                            회원가입할래요
                        </p>
                        <GoToLoginLessNav />
                    </div>
                </div>
            ) : (
                <div className="background">
                    <h2 className="title">10초면 가입할 수 있어요!</h2>
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
                            // disabled={signinValidationCondition}
                            className={`signin-button ${signinValidationCondition ? "disabled" : ""}`}
                        >
                            회원가입
                        </button>
                    </div>

                    <div className="option">
                        <p>
                            <div
                                onClick={function (event) {
                                    event.preventDefault();
                                    setModalMode("login");
                                    setId("");
                                    setPassword("");
                                    setConfirm("");
                                }}
                            >
                                로그인할래요
                            </div>
                        </p>
                        <GoToLoginLessNav />
                    </div>
                </div>
            )}
        </Modal>
    );
}

export default Login;

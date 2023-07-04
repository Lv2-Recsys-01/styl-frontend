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

    const handleToggleModalModeButton = (e) => {
        e.preventDefault();
        if (modalMode === "login") {
            setModalMode("signin");
        } else {
            setModalMode("login");
        }
        clearInput(true);
    };

    const clearInput = (shouldClearId = false) => {
        if (shouldClearId) {
            setId("");
        }
        setPassword("");
        setConfirm("");
        setError("");
    };

    const checkLoginIneligibility = id.length < 4 || password.length !== 4;
    const checkSigninIneligibility =
        id.length < 4 || password.length !== 4 || confirm.length !== 4 || password !== confirm;
    const isSignInMode = modalMode === "signin";
    const isLogInMode = modalMode === "login";

    const handleLogin = () => {
        console.log(`login => ID: ${id}, Password: ${password}`);

        if (checkLoginIneligibility) {
            clearInput();
            setError("검증에 실패했어요");
        }
    };

    const handleSignin = () => {
        console.log(`signin => ID: ${id}, Password: ${password}`);

        if (checkSigninIneligibility) {
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
            <div className="background">
                <h2 className="title">10초면 가입할 수 있어요!</h2>
                <div className="box">
                    ID
                    <input type="text" placeholder="ID" value={id} onChange={handleIdChange} maxLength={20} />
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
                {isSignInMode && (
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
                )}

                {/* 로그인, 회원가입 제출 */}
                {isLogInMode && (
                    <div className="box">
                        <button
                            onClick={handleLogin}
                            className={`signup-button ${checkLoginIneligibility ? "disabled" : ""}`}
                        >
                            로그인
                        </button>
                    </div>
                )}
                {isSignInMode && (
                    <div className="box">
                        <button
                            onClick={handleSignin}
                            className={`signin-button ${checkSigninIneligibility ? "disabled" : ""}`}
                        >
                            회원가입
                        </button>
                    </div>
                )}

                {/* 에러 섹션 */}
                {error && <p className="error">{error}</p>}

                {/* modal Mode 전환 */}
                <div className="option">
                    <p onClick={handleToggleModalModeButton}>{isLogInMode ? "회원가입할래요" : "회원가입"}</p>
                    <GoToLoginLessNav />
                </div>
            </div>
        </Modal>
    );
}

export default Login;

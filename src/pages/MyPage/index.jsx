import React from "react";
import ToggleRouter from "../../components/ToggleRouter";
import ImageGridView from "../../components/ImageGridView";

function MyPage() {
    return (
        <div>
            Collections
            <ToggleRouter />
            <ImageGridView />
        </div>
    );
}

export default MyPage;

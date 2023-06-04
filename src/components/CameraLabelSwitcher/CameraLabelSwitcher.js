import { useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

const CameraLabelSwitcher = () => {
    const [cameraLabel, setCameraLabel] = useState(null);

    const resetCameraLabel = () => {
        setCameraLabel(null);
    };

    return (
        <div className="mb-2">
        <p>Camera Label Switcher</p>
        <hr />
            <Dropdown as={ButtonGroup} size="lg">

                <Button
                    className="text-capitalize"
                    variant={cameraLabel ? cameraLabel : "secondary"}
                >
                    {cameraLabel ? cameraLabel : "Please select a cameraLabel"}
                </Button>

                <Dropdown.Toggle
                    split
                    variant={cameraLabel ? cameraLabel : "secondary"}
                    id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1" onClick={() => setCameraLabel("primary")}>
                        Primary
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="2" onClick={() => setCameraLabel("danger")}>
                        Danger
                    </Dropdown.Item>

                    <Dropdown.Item eventKey="3" onClick={() => setCameraLabel("success")}>
                        Success
                    </Dropdown.Item>

                    {/* <Dropdown.Divider /> */}

                    <Dropdown.Item eventKey="4" onClick={resetCameraLabel}>
                        Default cameraLabel
                    </Dropdown.Item>
                </Dropdown.Menu>
                
            </Dropdown>
        </div>
    );
};

export default CameraLabelSwitcher;

import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

export default function ButtonsSection() {

    return (
        <>
            <section>
                <h3>Contained</h3>
                <Button  variant="contained">Default</Button>
                <Button  variant="contained" color="primary">
                    Primary
                </Button>
                <Button  variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button  variant="contained" disabled>
                    Disabled
                    </Button>
                <Button  variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
            </section>
            <section>
                <h3>Outlined</h3>
                <Button  variant="outlined">Default</Button>
                <Button  variant="outlined" color="primary">
                    Primary
                </Button>
                <Button  variant="outlined" color="secondary">
                    Secondary
                </Button>
                <Button  variant="outlined" disabled>
                    Disabled
                </Button>
                <Button  variant="outlined" color="primary" href="#outlined-buttons">
                    Link
                </Button>
            </section>
            <section>
                <h3>With Icons</h3>
                <Button 
                    variant="contained"
                    color="secondary"

                    startIcon={<DeleteIcon />}
                >
                    Delete
                </Button>
                {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                <Button 
                    variant="contained"
                    color="primary"

                    endIcon={<Icon>send</Icon>}
                >
                    Send
                </Button>
                <Button 
                    variant="contained"
                    color="default"

                    startIcon={<CloudUploadIcon />}
                >
                    Upload
                </Button>
                <Button 
                    variant="contained"
                    disabled
                    color="secondary"

                    startIcon={<KeyboardVoiceIcon />}
                >
                    Talk
                </Button>
                <Button 
                    variant="contained"
                    color="primary"
                    size="small"

                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                <Button 
                    variant="contained"
                    color="primary"
                    size="large"

                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
            </section>
        </>
    )
}
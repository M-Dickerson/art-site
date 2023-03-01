import * as React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from "@mui/icons-material/Favorite";
import InterestsIcon from '@mui/icons-material/Interests';

export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
                <BottomNavigationAction label="Ko-Fi" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Tumblr" icon={<InterestsIcon />} />
            </BottomNavigation>
        </Paper>
    );
}
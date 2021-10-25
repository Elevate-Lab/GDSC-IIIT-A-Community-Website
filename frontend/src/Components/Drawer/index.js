import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { MenuIcon } from "@material-ui/icons/Menu";
const navbarContent = ["About", "Events", "Team", "Projects", "Blogs"];

function DrawerComponent() {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<div>
			<Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
				<List>
					{navbarContent.map((item, index) => (
						<ListItem onClick={() => setOpenDrawer(false)}>
							<ListItemText>
								<Link to={`${item}`}>item</Link>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
			<IconButton onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon />
			</IconButton>
		</div>
	);
}
export default DrawerComponent;

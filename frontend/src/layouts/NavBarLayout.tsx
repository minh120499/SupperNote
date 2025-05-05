import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navBarRouter, subMenuNavBarMap } from "@/routers/navbar-router";
import { NavLink } from "react-router";

const NavBarLayout = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navBarRouter.map((navBar) => {
          const subMenuNavBar = subMenuNavBarMap[navBar.path];
          if (!subMenuNavBar)
            return (
              <NavLink to={navBar.path} key={navBar.path}>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{navBar.label}</NavigationMenuLink>
                </NavigationMenuItem>
              </NavLink>
            );

          return subMenuNavBar.map((subMenu) => (
            <NavigationMenuItem key={subMenu.path}>
              <NavigationMenuTrigger>{navBar.label}</NavigationMenuTrigger>
              <NavLink to={subMenu.path} key={subMenu.path}>
                <NavigationMenuContent>{subMenu.label}</NavigationMenuContent>
              </NavLink>
            </NavigationMenuItem>
          ));
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBarLayout;

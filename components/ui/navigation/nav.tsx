"use client"
// builtin

// external
import Link from "next/link"
// missing a lot of func from here: https://base-ui.com/react/components/navigation-menu
// see if need to add more complex functionality later on
import { NavigationMenu } from "@base-ui/react/navigation-menu";

// internal
import type { AnimatedComponent } from "@/lib/animation";
import type { ColoredComponent } from "@/lib/color";
import './nav.css';


interface NavigationProps extends ColoredComponent, AnimatedComponent { }

export function Navigation({ colorScheme }: NavigationProps) {
    return (
        <NavigationMenu.Root className={`nav-root ${colorScheme}`}>
            <NavigationMenu.List className="nav-list">
                <NavigationMenu.Item>
                    <Link className="nav-trigger" href="/rush">
                        Rush
                    </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <Link className="nav-trigger" href="/about">
                        Who We Are
                    </Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <Link className="nav-trigger" href="/contact">
                        Contact Us
                    </Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}

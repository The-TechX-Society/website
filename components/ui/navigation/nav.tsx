"use client";
// builtin

// external
import Link from "next/link";
import Image from "next/image";
// missing a lot of func from here: https://base-ui.com/react/components/navigation-menu
// see if need to add more complex functionality later on
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { motion, useScroll, useTransform } from "motion/react";

// internal
import type { ColoredComponent } from "@/lib/color";
import "./nav.css";


const SCROLL_ENDPOINTS_PX = [30, 120];
const PADDING_ENDPOINTS_PX = [24, 8];


interface NavigationProps extends ColoredComponent { }

export function Navigation({ colorScheme }: NavigationProps) {
    const { scrollY } = useScroll();

    const paddingTop = useTransform(scrollY, SCROLL_ENDPOINTS_PX, PADDING_ENDPOINTS_PX);
    const paddingBottom = useTransform(scrollY, SCROLL_ENDPOINTS_PX, PADDING_ENDPOINTS_PX);

    return (
        <NavigationMenu.Root
            className={`nav-root ${colorScheme}`}
            render={
                <motion.nav style={{
                    paddingTop,
                    paddingBottom
                }} />
            }
        >
            <div className="nav-logo-container">
                <Link href="/" className="nav-logo-link">
                    <Image src="/logos/techx_light.png" alt="logo" width={1000} height={250} loading="eager" />
                </Link>
            </div>

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

            <div className="nav-right-slot" />
        </NavigationMenu.Root>
    );
}

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

interface NavigationProps extends ColoredComponent { }

export function Navigation({ colorScheme }: NavigationProps) {
    const { scrollY } = useScroll();

    const paddingTop = useTransform(scrollY, [30, 120], [24, 8]);
    const paddingBottom = useTransform(scrollY, [30, 120], [24, 8]);

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

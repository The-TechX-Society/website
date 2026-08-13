"use client"
// builtin

// external
import NextLink from "next/link"
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import type { Url } from "next/dist/shared/lib/router/router";

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
                    <NavigationMenu.Trigger className="nav-trigger">
                        Overview
                        <NavigationMenu.Icon className="nav-icon">
                            <CaretDownIcon />
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="nav-content">
                        <ul className="nav-grid-link-list">
                            {overviewLinks.map((item) => (
                                <li key={item.href}>
                                    <Link className="nav-link-card" href={item.href}>
                                        <h3 className="nav-link-title">{item.title}</h3>
                                        <p className="nav-link-description">{item.description}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="nav-trigger">
                        Handbook
                        <NavigationMenu.Icon className="nav-icon">
                            <CaretDownIcon />
                        </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="nav-content">
                        <ul className="nav-flex-link-list">
                            {handbookLinks.map((item) => (
                                <li key={item.href}>
                                    <Link className="nav-link-card" href={item.href}>
                                        <h3 className="nav-link-title">{item.title}</h3>
                                        <p className="nav-link-description">{item.description}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <Link className="nav-trigger" href="https://github.com/mui/base-ui">
                        GitHub
                    </Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>

            <NavigationMenu.Portal>
                <NavigationMenu.Positioner
                    className="nav-positioner"
                    sideOffset={10}
                    collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
                    collisionAvoidance={{ side: 'none' }}
                >
                    <NavigationMenu.Popup className="nav-popup">
                        <NavigationMenu.Arrow className="nav-arrow" />
                        <NavigationMenu.Viewport className="nav-viewport" />
                    </NavigationMenu.Popup>
                </NavigationMenu.Positioner>
            </NavigationMenu.Portal>
        </NavigationMenu.Root>
    );
}

function Link(props: NavigationMenu.Link.Props) {
    return (
        <NavigationMenu.Link
            render={<NextLink href={props.href as unknown as Url} />}
            {...props}
        />
    );
}

function CaretDownIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            {...props}
            style={{ display: 'block', ...props.style }}
        >
            <title>Caret Down</title>
            <path d="M12 6H4l4 4.5z" />
        </svg>
    );
}

const overviewLinks = [
    {
        href: '/react/overview/quick-start',
        title: 'Quick Start',
        description: 'Install and assemble your first component.',
    },
    {
        href: '/react/overview/accessibility',
        title: 'Accessibility',
        description: 'Learn how we build accessible components.',
    },
    {
        href: '/react/overview/releases',
        title: 'Releases',
        description: 'See what’s new in the latest Base UI versions.',
    },
    {
        href: '/react/overview/about',
        title: 'About',
        description: 'Learn more about Base UI and our mission.',
    },
] as const;

const handbookLinks = [
    {
        href: '/react/handbook/styling',
        title: 'Styling',
        description:
            'Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.',
    },
    {
        href: '/react/handbook/animation',
        title: 'Animation',
        description:
            'Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.',
    },
    {
        href: '/react/handbook/composition',
        title: 'Composition',
        description:
            'Base UI components can be replaced and composed with your own existing components.',
    },
] as const;
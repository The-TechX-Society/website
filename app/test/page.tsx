// builtin

// external

// internal
import Button from "@/components/ui/button";
import { ComponentVariant } from "@/lib/ui/variants";

export default function UITest() {
    return (
        <div className="p-4 space-y-2">
            <Button variant={ComponentVariant.ACCENT}>Hello there</Button>

            <p style={{ fontWeight: 300 }}>What is up everyone?</p>
            <p style={{ fontWeight: 300 }}>
                <i>What is up everyone?</i>
            </p>

            <p style={{ fontWeight: 400 }}>What is up everyone?</p>
            <p style={{ fontWeight: 400 }}>
                <i>What is up everyone?</i>
            </p>

            <p style={{ fontWeight: 500 }}>What is up everyone?</p>
            <p style={{ fontWeight: 500 }}>
                <i>What is up everyone?</i>
            </p>

            <p style={{ fontWeight: 700 }}>What is up everyone?</p>
            <p style={{ fontWeight: 700 }}>
                <i>What is up everyone?</i>
            </p>

            <p style={{ fontWeight: 900 }}>What is up everyone?</p>
            <p style={{ fontWeight: 900 }}>
                <i>What is up everyone?</i>
            </p>
        </div>
    );
}

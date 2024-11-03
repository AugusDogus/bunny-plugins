import Settings from "./settings";

export default definePlugin({
    start: () => {
        console.log("Hello world!");
    },
    stop: () => {
        console.log("Goodbye, world.");
    },
    SettingsComponent: Settings,
});

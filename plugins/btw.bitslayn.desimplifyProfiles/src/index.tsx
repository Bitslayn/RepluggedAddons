import { Injector, webpack } from "replugged";

const inject = new Injector();

const profileModal = webpack.filters.bySource(/\.MODAL,.+\.userProfileModalOuter/);
console.log(profileModal);

export function start(): void {
  inject.before(profileModal, "render", (props, res) => {
    // props is an array of the arguments passed to the original method (similar to `before`)
    // res is the return value of the original method

    // you can return a modified version of the return value if you want to modify it
    // or you can return undefined if you want to use the original return value
    return res;
  });
}
export function stop(): void {
  inject.uninjectAll();
}

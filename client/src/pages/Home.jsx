import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store/index";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                تیشرت <br className="xl:block hidden" /> خودتو بساز !
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
                پیراهن منحصر به فرد خودتو با کانسپت سه بعدی جدید من بساز :){" "}
                <br />
                ابزار سفارشی سازی <strong>تخیل خود را آزاد کن </strong>و سبک
                خودتو تعریف کن.
              </p>

              <CustomButton
                type="filled"
                title="سفارشی سازی"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;

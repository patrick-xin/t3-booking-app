import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { MdCheckCircle, MdError, MdWarning } from "react-icons/md";
import { TbX } from "react-icons/tb";

type CustomToastProps = {
  visible: boolean;
  type: "success" | "warning" | "error";
  onClose: () => void;
  message: string;
};

export const CustomToast = ({
  visible,
  type,
  onClose,
  message,
}: CustomToastProps) => {
  const variants = {
    success: {
      icon: <MdCheckCircle className="text-white " />,
      style: "text-green-500 bg-green-500/50",
    },
    error: {
      icon: <MdError className="text-white" />,
      style: "text-red-500 bg-red-500/50",
    },
    warning: {
      icon: <MdWarning className="text-white" />,
      style: "text-yellow-500 bg-yellow-500/50",
    },
  };
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, top: 100 }}
          animate={{ opacity: 1, top: 0 }}
          exit={{ opacity: 0, top: 100 }}
          transition={{ type: "tween" }}
          className={cn(
            "pointer-events-auto relative flex min-w-[10rem] items-center gap-2 rounded py-4 px-6 shadow-lg",
            variants[type].style
          )}
        >
          <span>{variants[type].icon}</span>
          <span className="absolute right-1 top-1">
            <TbX
              className="h-4 w-4 cursor-pointer text-white"
              onClick={onClose}
            />
          </span>

          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

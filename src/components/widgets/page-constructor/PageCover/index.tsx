import styles from "./PageCover.module.scss";

type PageCoverProps = {
  className?: string;
};

const PageCover = ({ className }: PageCoverProps) => {
  return (
    <div
      className={[className, styles["constructor-page-cover-container"]]
        .filter((x) => x)
        .join(" ")}
    >
      2
    </div>
  );
};

export default PageCover;

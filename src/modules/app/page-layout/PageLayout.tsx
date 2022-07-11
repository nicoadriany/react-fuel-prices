const PageLayout = (props: any) => {
  return (
    <div className="page-layout">
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}

export default PageLayout;
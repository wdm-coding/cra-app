const PortalFooter = () => {
  return (
    <div className="w-full h-[216px] flex-shrink-0">
      <div
        className="search-wrap"
        data-search-cat="data-product"
        search-max-length="50"
        search-min-length="1"
        search-result-count="20"
        track-site-search="true"
      >
        <input placeholder="请输入搜索关键词" search-keyword="true" type="search" />
        <button search-submit="true">搜索</button>
      </div>
    </div>
  );
} 

export default PortalFooter;
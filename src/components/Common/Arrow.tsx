import { memo } from "react";
import Icons from '@/assets/icon';

const Arrow = ({ sortKey, _sortData, sortData }: any) => {

  const ascendingData = () => _sortData({ "key": sortKey, "val": "-1" })

  const discendingData = () => _sortData({ "key": sortKey, "val": "1" })

  return (

    (sortKey == sortData?.key && sortData?.val == '-1') ?
      <button onClick={() => discendingData()} >
        <Icons.TBArrowIcon />
      </button>
      // <IconButton size="small" onClick={() => discendingData()} sx={{ ml: 1, zIndex: 0 }} >
      //   <ArrowUpwardIcon fontSize="inherit" sx={{ color: sortKey == sortData?.key ? 'primary' : colors.white }} />
      // </IconButton>
      :
      <button onClick={() => ascendingData()} >
        <Icons.TBArrowIcon />
      </button>
    // <IconButton size="small" onClick={() => ascendingData()} sx={{ ml: 1, zIndex: 0 }} >
    //   <ArrowDownwardIcon fontSize="inherit" sx={{ color: sortKey == sortData?.key ? 'primary' : colors.white }} />
    // </IconButton>

  )
}

export default memo(Arrow)
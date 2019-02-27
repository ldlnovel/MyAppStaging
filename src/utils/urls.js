

const arrangeAir = '/network-sm-base/'
const arrangeAir2 = '/network-sm/'
const user = '/network-system/'

export const urls = {
  analysis: {
    airrouteCreate: arrangeAir2 + 'analysis/airroute/create',  // 创建/编辑航线 POST
    airrouteDelete: arrangeAir2 + 'analysis/airroute/delete',  // 根据ID删除航线 POST /analysis/airroute/delete/{ids}
    airrouteList: arrangeAir2 + 'analysis/airroute/page',  // 查询航线 GET /analysis/airroute/page
    create: arrangeAir2 + 'analysis/create',  // 创建/编辑分析 POST /analysis/create
    delete: arrangeAir2 + 'analysis/delete',  // 删除 POST /analysis/delete/{analysisId}
    id: arrangeAir2 + 'analysis',  // 根据ID查询分析 GET /analysis/{analysisId}
    copy: arrangeAir2 + 'analysis/copy',  // 复制主分析 POST /analysis/copy
    list: arrangeAir2 + 'analysis/page',  // 模糊查询 GET /analysis/page
    Alllist: arrangeAir2 + 'analysis/all',  // 查询所有 GET /analysis/all
    constraintversion: arrangeAir2 + 'analysis/constraintversion/query',  // 约束规则查询 // /analysis/constraintversion/query
    createConstraintversion: arrangeAir2 + 'analysis/constraintversion/create',  // 约束规则 /analysis/constraintversion/create
    publish: arrangeAir2 + 'analysis/publish',  // 运行  POST /analysis/publish
    killOperation: arrangeAir2 + 'analysis/killer',  // 停止运行  killer
    export: arrangeAir2 + 'report/flightdata/export',  // 导出 /report/flightdata/export/{analysisId}
  },
  plannedContrasts: {
    flightchange: arrangeAir2 + 'report/flightchange/route',  // 航班变更报表 // GET /report/flightchange/route
    flightchange_Flight: arrangeAir2 + 'report/flightchange/flight',  // 航线变更报表 // GET /report/flightchange/flight
  },
  slotFrom: {
    slot: arrangeAir2 + 'report/slot',  // /report/slot 时刻流量报表
  },

  analysislog: {
    log: arrangeAir2 + 'analysislog/query',  // 分析日志查询 GET /analysislog/query
  },
  SeletOption: {
    all: arrangeAir + 'version/all', /// 查询所有 下拉框值
    page: arrangeAir + 'version/page', /// 查询所有 下拉框值
    seasons: arrangeAir + 'labelvalue/seasons' /// 查询航季   /labelvalue/seasons
  },
  upload: {
    file: arrangeAir + 'version/upload'// POST /version/upload
  },
  user: {
    system: user + 'system',    /// 权限  /system/{userNo}/{systemOwner}
    smbaseauth: arrangeAir + 'smbaseauth',    /// 鉴权   GET /smbaseauth/{userNo}
    smauth: arrangeAir2 + 'smauth',    /// 鉴权   GET /smauth/{userNo}
    encryption: user + 'auth/verify' /// POST /auth/verify  认证
  }
}

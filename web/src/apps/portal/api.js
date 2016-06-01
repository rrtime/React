export const personName = 'zlj'

export const menus = [
  {"Code": "logout", "Text": "注销", "Url": "apps/logout"},
  {"Code": "welcome", "Text": "欢迎", "Url": "apps/welcome"},
  {"Code": "about", "Text": "关于", "Url": "apps/about"},
  {"Code": "baidu", "Text": "百度", "Url": 'http://www.baidu.com'},
  {"Code": "bings", "Text": "必应", "Url": 'http://www.bings.com'},
  {"Code": "personList", "Text": "员工列表", "Url": 'apps/aa/person/list?from=menu'},
  {"Code": "saleOrderList", "Text": "销售订单列表", "Url": 'apps/bap/list?from=menu&sysId=sa&mId=sa03'}
]

const url = m => "/ajaxpro/Ufida.T.EAP.Portal.UIP.Portal,Ufida.T.EAP.Portal.UIP.ashx?method=" + m;

export function  LoadPortalData(post){
  //debugger;
  return post(url('LoadPortalData'));
  return {then:f=>f({value:{GetMenuTable:menus}})};
}
/*[{
    "Text": "库存核算",
    "Code": "ST",
    "Url": "Portal/Modules/SpecificBusiDiagrame.aspx?Code=ST",
    "AccessKey": "",
    "IsSeparator": false,
    "IsCommonUse": false,
    "Items": [{
        "Text": "单据",
        "Code": "ST10",
        "Url": "#",
        "AccessKey": "",
        "IsSeparator": false,
        "IsCommonUse": true,
        "Items": [{
            "Text": "采购入库单",
            "Code": "ST1001",
            "Url": "BAPView/Voucher.aspx?mId=ST1001&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "采购入库单明细表",
                "MenuName": "明细表",
                "Code": "ST4001",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_PurchaseReceiveDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "采购入库单统计表",
                "MenuName": "统计表",
                "Code": "ST6001",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_PurchaseReceiveSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "产成品入库单",
            "Code": "ST1002",
            "Url": "BAPView/Voucher.aspx?mId=ST1002&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "产成品入库单明细表",
                "MenuName": "明细表",
                "Code": "ST4002",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_ProductReceiveDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "产成品入库单统计表",
                "MenuName": "统计表",
                "Code": "ST6002",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_ProductReceiveSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "其他入库单",
            "Code": "ST1004",
            "Url": "BAPView/Voucher.aspx?mId=ST1004&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "其他入库单明细表",
                "MenuName": "明细表",
                "Code": "ST4004",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_OtherReceiveDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "其他入库单统计表",
                "MenuName": "统计表",
                "Code": "ST6004",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_OtherReceiveSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "分隔符",
            "Code": "STSP01",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "销售出库单",
            "Code": "ST1021",
            "Url": "BAPView/Voucher.aspx?mId=ST1021&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "销售出库单明细表",
                "MenuName": "明细表",
                "Code": "ST4005",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_SaleDispatchDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "销售出库单统计表",
                "MenuName": "统计表",
                "Code": "ST6011",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_SaleDispatchSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "材料出库单",
            "Code": "ST1022",
            "Url": "BAPView/Voucher.aspx?mId=ST1022&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "材料出库单明细表",
                "MenuName": "明细表",
                "Code": "ST4006",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_MaterialDispatchDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "材料出库单统计表",
                "MenuName": "统计表",
                "Code": "ST6012",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_MaterialDispatchSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "其他出库单",
            "Code": "ST1024",
            "Url": "BAPView/Voucher.aspx?mId=ST1024&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "其他出库单明细表",
                "MenuName": "明细表",
                "Code": "ST4008",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_OtherDispatchDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "其他出库单统计表",
                "MenuName": "统计表",
                "Code": "ST6014",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_OtherDispatchSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "调拨单",
            "Code": "ST1031",
            "Url": "BAPView/Voucher.aspx?mId=ST1031&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "调拨单明细表",
                "MenuName": "明细表",
                "Code": "ST4030",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_TransVoucherDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "调拨单统计表",
                "MenuName": "统计表",
                "Code": "ST6033",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_TransVoucherSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "分隔符",
            "Code": "STSP02",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "要货单",
            "Code": "ST1030",
            "Url": "BAPView/Voucher.aspx?mId=DI15&sysId=DI&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "要货单明细表",
                "MenuName": "明细表",
                "Code": "ST4025",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=DI_StockRequestDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "要货单统计表",
                "MenuName": "统计表",
                "Code": "ST6034",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=DI_StockRequestSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "形态转换单",
            "Code": "ST1033",
            "Url": "BAPView/Voucher.aspx?mId=ST1033&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "形态转换单明细表",
                "MenuName": "明细表",
                "Code": "ST4020",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_ShapeVoucherDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "形态转换单统计表",
                "MenuName": "统计表",
                "Code": "ST6032",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_ShapeVoucherSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "组装拆卸单",
            "Code": "ST1034",
            "Url": "BAPView/Voucher.aspx?mId=ST1034&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "组装拆卸单明细表",
                "MenuName": "明细表",
                "Code": "ST4009",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_AssemDetachDetailRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }, {
                "Text": "组装拆卸单统计表",
                "MenuName": "统计表",
                "Code": "ST6031",
                "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_AssemDetachSumRpt",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }, {
            "Text": "盘点单",
            "Code": "ST1032",
            "Url": "BAPView/Voucher.aspx?mId=ST1032&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": [{
                "Text": "盘点向导",
                "MenuName": "盘点向导",
                "Code": "ST103202",
                "Url": "ST/StockInnerProcess/CheckVoucherGuide.aspx",
                "AccessKey": "",
                "IsSeparator": false,
                "IsCommonUse": true,
                "Items": []
            }]
        }]
    }, {
        "Text": "库存账表",
        "Code": "ST20",
        "Url": "#",
        "AccessKey": "",
        "IsSeparator": false,
        "IsCommonUse": true,
        "Items": [{
            "Text": "现存量查询",
            "Code": "ST3011",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_CurrentStockRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "库存状况表",
            "Code": "ST9001",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_CurStockStatusOfInvRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "出入库流水",
            "Code": "ST9081",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_RDSInOutStockStreamRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "分隔符",
            "Code": "STSP04",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "收发存汇总表",
            "Code": "ST6061",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_RDSSummaryRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "库存台账",
            "Code": "ST9002",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_RDSRunningAccountRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "分隔符",
            "Code": "STSP05",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }]
    }, {
        "Text": "成本账表",
        "Code": "ST30",
        "Url": "#",
        "AccessKey": "",
        "IsSeparator": false,
        "IsCommonUse": true,
        "Items": [{
            "Text": "重新计价",
            "Code": "ST3001",
            "Url": "ST/StockTools/RestartCostingVoucher.aspx#520:510",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "分隔符",
            "Code": "STSP07",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "存货明细账",
            "Code": "ST9021",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_RDSInventoryDetailRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "存货总账",
            "Code": "ST9020",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_RDSInventoryTotalRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "分隔符",
            "Code": "STSP08",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "成本异常查询",
            "Code": "ST3010",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_InvCostAnalysisRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }]
    }, {
        "Text": "库存工具及单据",
        "Code": "ST40",
        "Url": "#",
        "AccessKey": "",
        "IsSeparator": false,
        "IsCommonUse": true,
        "Items": [{
            "Text": "拣货装箱",
            "Code": "ST3007",
            "Url": "BAPView/Voucher.aspx?mId=ST3007&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "产品成本录入工具",
            "Code": "ST3006",
            "Url": "BAPView/OpenList.aspx?mId=ST3006&sysId=ST&pId=openListView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "产品成本分配",
            "Code": "ST3013",
            "Url": "BAPView/Voucher.aspx?sysId=mp&mId=mp08&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "分隔符",
            "Code": "STSP10",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "分隔符",
            "Code": "STSP11",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "入库调整单",
            "Code": "ST2004",
            "Url": "BAPView/Voucher.aspx?mId=ST2004&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "出库调整单",
            "Code": "ST2005",
            "Url": "BAPView/Voucher.aspx?mId=ST2005&sysId=ST&pId=voucherView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }]
    }, {
        "Text": "综合报表",
        "Code": "ST50",
        "Url": "#",
        "AccessKey": "",
        "IsSeparator": false,
        "IsCommonUse": true,
        "Items": [{
            "Text": "要货单执行表",
            "Code": "ST7018",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=DI_StockRequestExecuteRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "分隔符",
            "Code": "STSP12",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "呆滞存货分析表",
            "Code": "ST6063",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_ObsoleteMaterialRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "库存周转率分析表",
            "Code": "ST6065",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_MaterialTurnoverRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "库龄分析表",
            "Code": "ST6075",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_StockAgeRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "库存资金占用分析表",
            "Code": "ST6067",
            "Url": "BAPView/ReportWithSimpleSearch.aspx?ReportName=ST_CapitalOccupancyRpt",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "分隔符",
            "Code": "STSP13",
            "Url": "#",
            "AccessKey": " ",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }]
    }]
}, {
    "Text": "报表中心",
    "Code": "RT",
    "Url": "Portal/ReportCenter/Main.aspx",
    "AccessKey": "",
    "IsSeparator": false,
    "IsCommonUse": false,
    "Items": [{
        "Text": "报表中心",
        "Code": "RT10",
        "Url": "#",
        "AccessKey": "",
        "IsSeparator": false,
        "IsCommonUse": true,
        "Items": [{
            "Text": "分隔线",
            "Code": "RT01",
            "Url": "#",
            "AccessKey": "",
            "IsSeparator": true,
            "IsCommonUse": true,
            "Items": []
        }, {
            "Text": "存货中心",
            "Code": "AA6050",
            "Url": "BaseInfo/CharacterCentre/InventoryCentre.aspx?sysId=ST&mId=aa6050&pId=voucherTreeView&SourceType=FromMenu",
            "AccessKey": "",
            "IsSeparator": false,
            "IsCommonUse": true,
            "Items": []
        }]
    }]
}]*/

export const messages = [{
	id:1,
	code:'VoucherMessage',
	name:'单据消息',
	url:'BAPView/BaseInfoList.aspx?mId=SYS2525&pId=baseInfoListView&sysId=SM&showExit=false&Height=360&IsUnread=1&MessageType=VoucherMessage',
	count:1
},{
	id:2,
	code:'AuditMessage',
	name:'单据审核通知',
	url:'BAPView/BaseInfoList.aspx?mId=SYS2525&pId=baseInfoListView&sysId=SM&showExit=false&Height=360&IsUnread=1&MessageType=AuditMessage',
	count:2
}]

export const todos = [{
	id:6,
	code:'AuditTodo',
	name:'待审核业务',
	url:'Portal/ToBeAudit.aspx?ShowStyle=Expand',
	bizCode:'',
	count:0
},{
	id:31,
	code:'ShipmentsTodo',
	name:'要货单待发货业务',
	url:'Portal/PendingBiz.aspx?ShowStyle=Expand&mId=PRT2048',
	bizCode:'PRT2048',
	count:2
}]

export const alarms=[{
	id:17,
	code:'StoreLowAlarm',
	name:'最低库存预警',
	url:'Portal/ForcastWarning.aspx?ShowStyle=Expand&mId=PRT1010',
	bizCode:'PRT1010',
	count:0
},{
	id:18,
	code:'StoreHeightAlarm',
	name:'最高库存预警',
	url:'Portal/ForcastWarning.aspx?ShowStyle=Expand&mId=PRT1011',
	bizCode:'PRT1011',
	count:1
}]

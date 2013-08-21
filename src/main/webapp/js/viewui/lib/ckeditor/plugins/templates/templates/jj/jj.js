/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
 */
CKEDITOR.addTemplates("jj",{
	imagesPath : CKEDITOR.getUrl(CKEDITOR.plugins.getPath("templates") + "templates/images/"),
	templates : [
			{
				title : "交际费用报销单审核信息通知",
				image : "template1.gif",
				description : "One main image with a title and text that surround the image.",
				html :'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> <html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <title>审核信息通知</title> <style> .mainImfo,.detailImfo { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 13px; }  .mainImfo .tdlight1 { background-color: #DBEAF9; text-align: left; width: 75px; }  .mainImfo .tdlight2 { text-align: left; width: 170px; }  .detailImfo .first { background-color: #DBEAF9; }  .detailImfo td { min-width: 26px; } </style> </head> <body> <div>&nbsp;</div> <table id="Table1" style="width: 100%;"> <tbody> <tr> <td height="300"><div align="center"> <table bgcolor="#f2f2f2" border="0" cellpadding="0" cellspacing="1" class="ke-zeroborder" height="240" id="Table3" width="600"> <tbody> <tr> <td bgcolor="white" height="15" valign="top"><div align="center"> <img float:="" src="${emailAuditUrl}/themes/img/img_poushenglogo.gif" /> </div></td> </tr> <tr> <td bgcolor="#f2f2f2" height="242" valign="top"><div align="center"> <table border="0" cellpadding="0" cellspacing="0" class="ke-zeroborder" id="Table4" width="90%"> <tbody> <tr> <td height="25">&nbsp;</td> </tr> <tr> <td align="center"><b><span>审核信息通知</span></b></td> </tr> <tr> <td align="left" width="100%"><br /> <b>${act_taskUserDisplayName}</b>,您好：<br /> ${pi_applyUserDisplayName}有一份<b>${pi_form_name}</b>单据名称:<b>${pi_procInstName}</b>需要您的意见,请予处理!<br /> <br /> 详细如下： </td> </tr> <tr> <td> <div align="center"> <table id="Table4" class="ke-zeroborder" border="0" cellpadding="0" cellspacing="0" width="508"> <tbody> <tr> <td height="15"></td> </tr> <tr> <td> <table class="mainImfo" style="width:100%;"> <tr> <td class="tdlight1">单据编号:</td> <td class="tdlight2">${finSocialMasterVo.billNo}</td> <td class="tdlight1">申请部门:</td> <td class="tdlight2">${finSocialMasterVo.applyOrgName}</td> </tr> <tr> <td class="tdlight1">申请人:</td> <td class="tdlight2">${finSocialMasterVo.applyName}</td> <td class="tdlight1">职务:</td> <td class="tdlight2">${finSocialMasterVo.duty}</td> </tr> </table> </td> </tr> <tr> <td> <table class="detailImfo" style="width:100%;text-align:center;"> <thead> <tr> <td>序号</td> <td style="width:110px;">日期</td> <td>内容</td> <td>对象</td> <td>人数</td> <td>金额</td> <td>备注</td> </tr> </thead> <tbody> <!--  <#if finSocialMasterVo.details??>--> <!--  <#list finSocialMasterVo.details as finSocialDetail>--> <!-- <#if finSocialDetail_index%2==0 > --> <tr class="first"> <!--  <#else> --> <tr> <!--  </#if> --> <td>${finSocialDetail_index+1}</td> <td>${(finSocialDetail.chargeDate?date)?string("yyyy年MM月dd日")}</td> <td>${finSocialDetail.socialContent}</td> <td>${finSocialDetail.socialObject}</td> <td>${finSocialDetail.socialNumber!0}</td> <td>${finSocialDetail.charge!0}</td> <td>${finSocialDetail.remark}</td> </tr> <!--  </#list> --> <!--  </#if> --> </tbody> <tfoot> <tr> <td height="15" colspan="7" style="text-align:right;">${(finSocialMasterVo.total!0)?string.currency}</td> </tr> </tfoot> </table> </td> </tr> </tbody> </table> </div> </td> </tr> <tr> <td height="20"><br /></td> </tr> <tr> <td style="text-align:center;"> <table style="width: 100%"> <tbody> <tr> <td style="text-align: right; width: 45%;"> <a href="${emailAuditUrl}/emailaudit/agree?serCode=${serCode}&amp;taskId=${taskID}&amp;billNo=${billNo}&amp;state=${flowAction}&amp;userId=${userID}">同意</a></td> <td style="width: 50px; width: 10%;"></td> <td style="text-align: left; width: 45%;"> <a href="${emailAuditUrl}/emailaudit/disagree?serCode=${serCode}&amp;taskId=${taskID}&amp;billNo=${billNo}&amp;state=${flowAction}&amp;userId=${userID}">驳回</a></td> </tr> </tbody> </table> </td> </tr> <tr> <td height="20"><br /></td> </tr> <tr> <td align="left" width="100%"> 单据详细：${pi_procInstName} <b><a href="${emailAuditUrl}/form/index?billNo=${billNo}&amp;taskId=${taskID}&amp;isReject=${isReject}">登陆系统处理</a></b> </td> </tr> <tr> <td align="left" width="100%">注:系统邮件,请勿直接回复!</td> </tr> <tr> <td align="right" width="100%">BPMS管理员</td> </tr> <tr> <td align="right" width="100%">${pi_getDate}</td> </tr> <tr> <td height="15"></td> </tr> </tbody> </table> </div></td> </tr> </tbody> </table> </div></td> </tr> </tbody> </table> </body> </html> '
			}
	]
});
<%@ page contentType="text/html;charset=utf-8" %>
<%
	String rcid		   = request.getParameter("reCommConId" );
	String rctype	   = request.getParameter("reCommType"  );
	String rhash	   = request.getParameter("reHash"      );
	String rcncntype = request.getParameter("reCnclType"  );   // '1' 취소
%>
<html>
<head>
<meta http-equiv="Cache-Control" content="no-cache"> 
<meta http-equiv="Pragma" content="no-cache"> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>KSPay(<%=rcid%>)</title>
<script language="JavaScript">
	function init()
	{
		if("<%=rcncntype%>" == "1")
		{
			if(opener == null)
			{
				parent.mcancel();
				return;
			}else{
				opener.mcancel();
				setTimeout("self.close()",2000);
				return;
			}
		}
		if(opener == null)
		{
			parent.eparamSet("<%=rcid%>","<%=rctype%>","<%=rhash%>");
			parent.goResult();
		}else
		{
			opener.eparamSet("<%=rcid%>","<%=rctype%>","<%=rhash%>");
			opener.goResult();
			setTimeout("self.close()",2000);
		}
  }
  init();
</script>
</head>
<body>
 	<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
     <tr>
        <td valign="middle" align="center"><table width="280" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td><img src="./imgs/progress_resouce.jpg" width="280" height="201"></td>
          </tr>
        </table>		
		</td>
      </tr>
  </table>
</body>
</html>
define(function(){
	
	MyAccountModel = function(){
		
		this.sidebarElements = ["myAccount","orderStatus","kohlsCharge","customerService","sharing"],
		
		this.sidebarDetails = {
				
			myAccount:{
				caption:"My Account"
			},
			orderStatus:{
				caption:"Order Status & Tracking"
			},
			kohlsCharge:{
				caption:"My Kohl's Charges"
			},
			customerService:{
				caption:"Customer Service",
				subLevel0:{
					title : "contactCustomerService" ,
					caption:"Contact Customer Service"
				},
				subLevel1:{
					title:"legalPrivacy",
					caption:"Legal Privacy"
				},
				subLevel2:{
					title:"about",
					caption:"About"
				}
			},
			sharing:{
				caption:"Order Status & Tracking",
				subLevel0:{
					title : "shareApp",
					caption:"Share this App"
				}
			}
		},
		
		this.renderingFunction = function(){
			alert("render ITEM LIST");
		}
	},
	
	var frt = 'ezt'
	
	return  {
		MyAccountModel : MyAccountModel
	}
});
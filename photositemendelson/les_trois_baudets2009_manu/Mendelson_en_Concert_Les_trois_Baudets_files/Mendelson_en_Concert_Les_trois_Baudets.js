// Created by iWeb 3.0.1 local-build-20090416

function createMediaStream_id2()
{return IWCreatePhotocast("file://localhost/Users/nicolasb/Desktop/BBB_MAUN%28iweb%29/Site/Mendelson_en_Concert_Les_trois_Baudets_files/rss.xml",false);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('file://localhost/Users/nicolasb/Desktop/BBB_MAUN%28iweb%29/Site',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget0'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('file://localhost/Users/nicolasb/Desktop/BBB_MAUN%28iweb%29/Site',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(166,166),new IWSize(166,0),new IWSize(192,181),27,27,0,new IWSize(22,31)),new IWPhotoFrame([IWCreateImage('Mendelson_en_Concert_Les_trois_Baudets_files/FormalShadow_01.png'),IWCreateImage('Mendelson_en_Concert_Les_trois_Baudets_files/FormalShadow_02.png'),IWCreateImage('Mendelson_en_Concert_Les_trois_Baudets_files/FormalShadow_03.png'),IWCreateImage('Mendelson_en_Concert_Les_trois_Baudets_files/FormalShadow_06.png'),IWCreateImage('Mendelson_en_Concert_Les_trois_Baudets_files/FormalShadow_12.png'),IWCreateImage('Mendelson_en_Concert_Les_trois_Baudets_files/FormalShadow_11.png'),IWCreateImage('Mendelson_en_Concert_Les_trois_Baudets_files/FormalShadow_10.png'),IWCreateImage('Mendelson_en_Concert_Les_trois_Baudets_files/FormalShadow_04.png')],null,2,0.700000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:0,reflectionOffset:2,captionHeight:0,fullScreen:1,transitionIndex:2},'Media/slideshow.html','widget0','widget1','widget2')});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Mendelson_en_Concert_Les_trois_Baudets_files/Mendelson_en_Concert_Les_trois_BaudetsMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}

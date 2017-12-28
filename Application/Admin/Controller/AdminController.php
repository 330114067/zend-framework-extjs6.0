<?php
namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;  
use Zend\Captcha\Image;
use Zend\Session\Storage\SessionArrayStorage;


class AdminController extends AbstractActionController
{
    protected $userTable;
    protected  $table;
    public function indexAction(){
        return new ViewModel(array(
            'user' =>$this->getUserTable()->fetchAll(),
        ));
    }
    public function aboutAction()
    {
        return new ViewModel();
    }
    public function loginAction(){
          $return=array();
          $sessionKey_Capthca = 'sesscaptcha';
          $sessionStorage = new SessionArrayStorage();
          $captchaWord = $sessionStorage->offsetGet($sessionKey_Capthca);//获取session临时保存的验证码
          $end=false;
          if($captchaWord==$_POST['verify']){
              $end=true;
          }
          if($end==false){
              $return['msg']='验证错误';
              return new JsonModel($return); 
          }
          $resultSet=$this->getUserTable()->getrow(md5($_POST['password']),$_POST['username']);
          $units = array();
          foreach ($resultSet as $unit) {
              $units[] = $unit;
              
          }

          if(empty($units[0])){
              $return['msg']='登录用户名和密码错误';
              $return['success']=false;
          }else{
              $return['msg']='OK';
              $return['success']=true;
              $return['url']='index';
              //验证码保存到session
              $sessionStorage->offsetSet('user', $units);   
          }
          
          return new JsonModel($return); 
              

    }
    public function checkLoginAction(){
        $sessionStorage = new SessionArrayStorage();
        $user=$sessionStorage->offsetGet('user');
        if($user){
            return new JsonModel(array('user'=>$user));
        }else{
            return new JsonModel(array('user' => 0));
        }
    }
	public function listAction(){
	    $resultSet = $this->getUserTable()->fetchAll();
	    $units = array();
	   
	    foreach ($resultSet as $unit) {
	        $units[] = $unit;
	       
	    }
	    return new JsonModel($units);  
	}
	
	public function imgcodeAction(){
	    
	    $imgSrc = $this->createCaptcha();

	    return new JsonModel(array(
	        'imgSrc' => 'public/captcha/'.$imgSrc
	    ));	    
	}
	public function configAction(){
	    $data["children"]=array(
	        array('text'=>'网络设置','leaf'=>true,'xtypeClass'=>'configNetset'),
	        array('text'=>'数据库设置','leaf'=>true,'xtypeClass'=>'configDbset'),
	        array('text'=>'系统功能','leaf'=>true,'xtypeClass'=>'fidList')
	    );
	    return new JsonModel($data);  
	}
	public function distributeAction(){
	    $data["children"]=array(
	        array('text'=>'数据管理','leaf'=>true,'xtypeClass'=>'userList')
	    );
	    return new JsonModel($data); 
	}
	public function inquiryAction(){
	    $data["children"]=array(
	        array('text'=>'玩家等级查询','leaf'=>true,'xtypeClass'=>'gradeList'),
	        array('text'=>'装备查询','leaf'=>true,'xtypeClass'=>'userList'),
	        array('text'=>'充值查询','leaf'=>true,'xtypeClass'=>'userList'),
	    );
	    return new JsonModel($data);
	}
	public function getInfoAction(){
	    $return=array();
	    $p=($_REQUEST['start']+$_REQUEST['limit'])/$_REQUEST['limit'];
	    $data=$this->getUserTable()->getPaginator('', $p,  $_REQUEST['limit'],'DESC');
	    $units = array();
	   
	    foreach ($data as $unit) {
	        $units[] = $unit;
	        
	    }
	   
	    $return['success']=true;
	    $return['totalCount']=$this->getUserTable()->count();
	    $return['data']=$units;
	    return new JsonModel($return);
	}
	public function getFidAction(){
	    $return=array();
	    $p=($_REQUEST['start']+$_REQUEST['limit'])/$_REQUEST['limit'];
	    $data=$this->getFidTable()->getPaginator('', $p,  $_REQUEST['limit'],'DESC');
	    $units = array();
	   
	    foreach ($data as $unit) {
	        $units[] = $unit;
	        
	    }
	   
	    
	    $return['success']=true;
	    $return['totalCount']=$this->getFidTable()->count();
	    $return['data']=$units;
	    return new JsonModel($return);
	}
	public function delInfofoAction(){
	    $data['success']=false;
	    return new JsonModel($data);
	}
	public function editInfoAction(){
	    $data['success']=false;
	    return new JsonModel($data);
	}
	public function addInfoAction(){
	    $data['success']=false;
	    return new JsonModel($data);
	}
	public function logoutAction(){
	    $sessionStorage = new SessionArrayStorage();
	    $sessionStorage->offsetSet('user', 0);  
	    if ($sessionStorage->offsetExists('user')){
	        $sessionStorage->offsetUnset('user');
	    }  
	    $data['success']=true;
	    return new JsonModel($data);
// 	    $this->redirect ()->toRoute ( 'home', array( 'action' => 'login') );
	}
	public function getFidTable() {
	    
	    if (!$this->table) {
	        $sm = $this->getServiceLocator();
	        
	        $this->table = $sm->get('Admin\Model\fidTable');
	    }
	   
	    return $this->table;
	}
	public function getUserTable() {
	    
	    if (!$this->userTable) {
	        $sm = $this->getServiceLocator();
	        
	        $this->userTable = $sm->get('Admin\Model\userTable');
	    }
	    return $this->userTable;
	}

	public function createCaptcha(){
	    //创建验证码
	    $sessionKey_Capthca = 'sesscaptcha';
	    $icv = new Image();//zf2只支持生成*.png格式图片
	    $icv->setFont('public/fonts/ARIAL.TTF');//指定字体文件，可以从windows系统文件夹"WINDOWS\Fonts"下拷贝一个“arial.ttf”文件到/public/fonts目录下
	    $icv->setFontSize(14);
	    $icv->setHeight(30);
	    $icv->setWidth(100);
	    $icv->setDotNoiseLevel(20);//添加像素点的干扰，默认值100
	    $icv->setLineNoiseLevel(2);//添加像素线的干扰，默认值5
	    
	    $icv->setImgDir(APP_PATH.'/public/captcha/'); //特别需要注意的是，imgDir和imgUrl这2个参数，如果设置不当，很容易出现无法创建图片文件或者无法显示图片文件的问题。
	    
	    $icv->setWordlen(4);//设置字符个数，默认是8个字符
	    //创建新的验证码的值
	    $icv->generate();
	    //验证码图片的URL
	   
	    $imgSrc = '/'.$icv->getId().$icv->getSuffix();
	    
	    //验证码的字符串
	    $captchaWord = $icv->getWord();
	    $sessionStorage = new SessionArrayStorage();
	    //验证码保存到session
	    $sessionStorage->offsetSet($sessionKey_Capthca, $captchaWord);   
	    return $imgSrc;
	}
	
}

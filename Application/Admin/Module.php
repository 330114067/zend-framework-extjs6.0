<?php

namespace Admin;


use Admin\Model\user;
use Admin\Model\userTable;
use Admin\Model\fid;
use Admin\Model\fidTable;
use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
use Zend\Session\SessionManager;
use Zend\Session\Container;

class Module
{

    public function onBootstrap(MvcEvent $e)
    {
        $eventManager        = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);
        //json格式注入
        $app = $e->getParam('application');
        $app->getEventManager()->attach('render', array($this, 'registerJsonStrategy'), 100);
        //为表单验证对象设置默认的语言翻译器，以便验证码验证不通过时用默认语言提示用户
        \Zend\Validator\AbstractValidator::setDefaultTranslator($e->getApplication()->getServiceManager()->get('translator'));
        //启动session
        $this->bootstrapSession($e);
    }
    
    public function bootstrapSession($e){
        $session = $e->getApplication()->getServiceManager()->get('Zend\Session\SessionManager');
        $session->start();
        $container = new Container('initialized');
        if (!isset($container->init)) {
            $session->regenerateId(true);
            $container->init = 1;
        }
//         $container = new Container('initialized');
//         if (!isset($container->init)) {
//             $serviceManager = $e->getApplication()->getServiceManager();
//             $request        = $serviceManager->get('Request');
            
//             $session->regenerateId(true);
//             $container->init          = 1;
//             $container->remoteAddr    = $request->getServer()->get('REMOTE_ADDR');
//             $container->httpUserAgent = $request->getServer()->get('HTTP_USER_AGENT');
            
//             $config = $serviceManager->get('Config');
//             if (!isset($config['session'])) {
//                 return;
//             }
            
//             $sessionConfig = $config['session'];
//             if (isset($sessionConfig['validators'])) {
//                 $chain   = $session->getValidatorChain();
                
//                 foreach ($sessionConfig['validators'] as $validator) {
//                     switch ($validator) {
//                         case 'Zend\Session\Validator\HttpUserAgent':
//                             $validator = new $validator($container->httpUserAgent);
//                             break;
//                         case 'Zend\Session\Validator\RemoteAddr':
//                             $validator  = new $validator($container->remoteAddr);
//                             break;
//                         default:
//                             $validator = new $validator();
//                     }
                    
//                     $chain->attach('session.validate', array($validator, 'isValid'));
//                 }
//             }
//         }
    }
    
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\ClassMapAutoloader' => array(
                __DIR__ . '/autoload_classmap.php',
            ),
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__,
                ),
            ),
        );
    }
    
    public function getServiceConfig()
    {
        return array(
            'factories' => array(
                'Admin\Model\userTable' =>  function($sm) {
	                $tableGateway = $sm->get('UserTableGateway');
	                $table = new userTable($tableGateway);
	                return $table;
                },
                'UserTableGateway' => function ($sm) {
                	$dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                	$resultSetPrototype = new ResultSet();
               		$resultSetPrototype->setArrayObjectPrototype(new user());
                	return new TableGateway('t_user', $dbAdapter, null, $resultSetPrototype);
                },
                'Admin\Model\fidTable' =>  function($sm) {
                	$tableGateway = $sm->get('FidTableGateway');
                	$table = new fidTable($tableGateway);
                	return $table;
                },
                'FidTableGateway' => function ($sm) {
                	$dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                	$resultSetPrototype = new ResultSet();
                	$resultSetPrototype->setArrayObjectPrototype(new fid());
                	return new TableGateway('t_fid', $dbAdapter, null, $resultSetPrototype);
                },
                'Zend\Session\SessionManager' => function ($sm) {
                	$config = $sm->get('config');
	                if(isset($config['session'])) {
	                    $session = $config['session'];
	                    $sessionConfig = null;
	                    if (isset($session['config'])) {
	                        $class = isset($session['config']['class'])  ? $session['config']['class'] : 'Zend\Session\Config\SessionConfig';
	                        $options = isset($session['config']['options']) ? $session['config']['options'] : array();
	                        $sessionConfig = new $class();
	                        $sessionConfig->setOptions($options);
	                    }
	                    
	                    $sessionStorage = null;
	                    if (isset($session['storage'])) {
	                        $class = $session['storage'];
	                        $sessionStorage = new $class();
	                    }
	                    
	                    $sessionSaveHandler = null;
	                    if (isset($session['save_handler'])) {
	                        $sessionSaveHandler = $sm->get($session['save_handler']);
	                    }
	                    
	                    $sessionManager = new SessionManager($sessionConfig, $sessionStorage, $sessionSaveHandler);
	               }else{
	                    $sessionManager = new SessionManager();
	               }
               		Container::setDefaultManager($sessionManager);
               		return $sessionManager;
               },
        	), 
    	);
    }
    public function registerJsonStrategy($e)
    {
        $matches    = $e->getRouteMatch();
//         $moduleRootName = $matches->getMatchedRouteName();//$moduleaRootName是在module.config.php中配置的route名称
        
        $app          = $e->getTarget();
        $locator      = $app->getServiceManager();
        $view         = $locator->get('Zend\View\View');
        $jsonStrategy = $locator->get('ViewJsonStrategy');
        $view->getEventManager()->attach($jsonStrategy, 100);
    }  

    
}

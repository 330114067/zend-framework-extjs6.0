<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\ViewModel;

class NewsController extends AbstractRestfulController 
{
    public function indexAction(){
		$return_data=array('key'=>'test',2);
		die(json_encode($return_data));
	}

	public function listAction(){
		echo "NewsController listAction";
		exit;
	}
	 
	public function addAction(){
		echo "NewsController addAction";
		exit;
	}

	 

	public function editAction(){
		echo "NewsController editAction";
		exit;
	}
	 
	public function deleteAction(){
		echo "NewsController deleteAction";
		exit;
	}

}

<?php
namespace Admin\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Sql\Select;
use Zend\Db\Sql\Where;
use Zend\Db\Sql;
class userTable
{
    
    protected $tableGateway;


    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }
    
    private function getSql()
    {
        if (!$this->sql)
            $this->sql = new Sql($this->adapter);
            return $this->sql;
    }

    public function fetchAll()
    {
        $resultSet = $this->tableGateway->select();

        return $resultSet;
    }

    public function getUser($id)
    {
        $rowset = $this->tableGateway->select(array('id' => $id));
        $row = $rowset->current();
        if (!$row) {
            throw new \Exception("Could not find row $id");
        }
       
        return $row;
    }
    public function getrow($pw,$name)
    {
        
        $rowset = $this->tableGateway->select(array('password' =>$pw,'login_name'=>$name));
       
        if(empty($rowset)){
            $row=0;
        }else{
            $row = $rowset->current();
            if (!$row) {
                $row=0;
            }
        }

        return $row;
    }
    public function getPaginator($keyword = NULL, $start = 0, $limit =10, $order = 'ASC'){
        //新建select对象
    	$select = new Select($this->tableGateway->getTable());
        //构建查询条件
        $closure = function (Where $where) use($keyword) {
            if (!empty($keyword)) {
                $where->like('login_name', '%' . $keyword . '%')//查询符合特定关键词的结果
                ->or
                ->like('name', '%' . $keyword . '%');
            }
        };

        $select->columns(array("*"))
        ->where($closure);
        if ($order == 'DESC') {
            $select->order('id DESC');//按时间倒排序
        } else {
            $select->order('id ASC');//按标题排序
        }
		$select->limit($limit);
		$select->offset($start);
		$results=$this->tableGateway->selectWith($select);
        
		return $results;
    }
    public function count(){
   
        $num = $this->tableGateway->select()->count(); 

        return $num;
    }

    public function saveUser(user $user)
    {
    	$data=array();
    	foreach ($user as $key=>$value){
    		if(!empty($value)){
    			$data[$key]=$value;
    		}
    	}

        $id = $user->id;
        if (empty($id)) {
            $return=$this->tableGateway->insert($data);
        } else {
            if ($this->getUser($id)) {
            	$this->tableGateway->update($data, array('id' => $id));
            } else {
            	$return=false;
            }
        }
        return $return;
    }

    public function deleteUser($data)
    {
    	if(count($data) == count($data,1)){
    		$return=$this->tableGateway->delete(array('id' => $data['id']));
    		if(!$return){
    			$return=false;
    		}
    	}else{
    		foreach ($data as $key=>$value){
    			$return=$this->tableGateway->delete(array('id' => $value['id']));
    			if(!$return){
    				$return=false;
    			}
    		}
    	}
        
        return $return;
    }
}
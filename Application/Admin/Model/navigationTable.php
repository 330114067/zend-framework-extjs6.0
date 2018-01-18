<?php
namespace Admin\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Sql\Select;
use Zend\Db\Sql\Where;
use Zend\Paginator\Paginator;
use Zend\Paginator\Adapter\DbSelect;
use Zend\Db\ResultSet\ResultSet;
class navigationTable
{
    
    protected $tableGateway;

    public function __construct(TableGateway $tableGateway)
    {
        $this->tableGateway = $tableGateway;
    }

    public function fetchAll($keyid=null)
    {
    	
        $resultSet = $this->tableGateway->select(array('keyid'=>$keyid));

        return $resultSet;
    }

    public function getid($id)
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
    public function getPaginator($keyword = NULL, $page = 1, $itemsPerPage = 10, $order = 'ASC'){

        //新建select对象
        $select = new Select($this->tableGateway->getTable());
        //构建查询条件
        $closure = function (Where $where) use($keyword) {
            if ($keyword != '') {
                $where->like('name', '%' . $keyword . '%');//查询符合特定关键词的结果
            }
        };
		$where=array();
        $select->columns(array("*"))
        ->where($closure);
        if ($order == 'DESC') {
            $select->order('id DESC');//按时间倒排序
        } else {
            $select->order('id ASC');//按标题排序
        }
        
        $select->limit($limit); // 显示多少条
        $select->offset($start); // 从第几条开始显示
        
        $paginator=$this->tableGateway->selectWith($select);
//         //将返回的结果设置为user的实例
//         $resultSetPrototype = new ResultSet();
//         $resultSetPrototype->setArrayObjectPrototype(new navigation());
        
//         //创建分页用的适配器，第2个参数为数据库adapter，使用全局默认的即可
//         $adapter = new DbSelect($select, $this->tableGateway->getAdapter(), $resultSetPrototype);
//         //新建分页
//         $paginator = new Paginator($adapter);
//         //设置当前页数
//         $paginator->setCurrentPageNumber($page);
//         //设置一页要返回的结果条数
//         $paginator->setItemCountPerPage($itemsPerPage);
        
        return $paginator;
    }
    public function count(){
   
        $num = $this->tableGateway->select()->count(); 

        return $num;
    }

    public function saveid(navigation $navigation)
    {
        $data = array(
        		'id' => $navigation->id,
        		'name'  => $navigation->name
        );

        $id = $navigation->id;
        if (empty($id)) {
            $this->tableGateway->insert($data);
        } else {
            if ($this->getid($id)) {
                $this->tableGateway->update($data, array('id' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
    }

    public function deleteid($id)
    {
        $this->tableGateway->delete(array('id' => $id));
    }
}
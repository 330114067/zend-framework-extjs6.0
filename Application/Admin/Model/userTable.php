<?php
namespace Admin\Model;

use Zend\Db\TableGateway\TableGateway;
use Zend\Text\Table\Row;
use Zend\Db\Sql\Select;
use Zend\Db\Sql\Where;
use Zend\Paginator\Paginator;
use Zend\Paginator\Adapter\DbSelect;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\Adapter;
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
    public function getPaginator($keyword = NULL, $page = 1, $itemsPerPage = 10, $order = 'ASC'){
        //新建select对象
        $select = new Select('t_user');
        //构建查询条件
        $closure = function (Where $where) use($keyword) {
            if ($keyword != '') {
                $where->like('title', '%' . $keyword . '%');//查询符合特定关键词的结果
            }
        };

        $select->columns(array("*"))
        ->where($closure);
        if ($order == 'DESC') {
            $select->order('id DESC');//按时间倒排序
        } else {
            $select->order('id ASC');//按标题排序
        }
        //将返回的结果设置为user的实例
        $resultSetPrototype = new ResultSet();
        $resultSetPrototype->setArrayObjectPrototype(new user());
       
        //创建分页用的适配器，第2个参数为数据库adapter，使用全局默认的即可
        $adapter = new DbSelect($select, $this->tableGateway->getAdapter(), $resultSetPrototype);
        //新建分页
        $paginator = new Paginator($adapter);
        //设置当前页数
        $paginator->setCurrentPageNumber($page);
        //设置一页要返回的结果条数
        $paginator->setItemCountPerPage($itemsPerPage);
        
        return $paginator;
    }
    public function count(){
   
        $num = $this->tableGateway->select()->count(); 

        return $num;
    }

    public function saveUser(user $user)
    {
        $data = array(
            'enabled' => $user->enabled,
            'login_name' => $user->login_name,
            'name'  => $user->name,
            'org_id' => $user->org_id,
            'org_code'  => $user->org_code,
            'password'  => $user->password,
            'py'  => $user->py,
            'gender'  => $user->gender,
            'birthday'  => $user->birthday,
            'id_card_number'  => $user->id_card_number,
            'tel'  => $user->tel,
            'tel02'  => $user->tel02,
            'address'  => $user->address,
            'data_org'  => $user->data_org,
            'company_id'  => $user->company_id,
        );

        $id = $user->id;
        if (empty($id)) {
            $this->tableGateway->insert($data);
        } else {
            if ($this->getUser($id)) {
                $this->tableGateway->update($data, array('id' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
    }

    public function deleteUser($id)
    {
        $this->tableGateway->delete(array('id' => $id));
    }
}
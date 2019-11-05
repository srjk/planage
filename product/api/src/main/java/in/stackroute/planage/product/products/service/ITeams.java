package in.stackroute.planage.product.products.service;

import in.stackroute.planage.product.products.model.Teams;

import java.util.List;

public interface ITeams {
    public List<Teams> getTeams();
    public Teams addTeamMember(Teams team);
    public void deleteTeamMember(int id);
}

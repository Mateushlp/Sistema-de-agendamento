USE agendamento;
CREATE TABLE ordens_de_servico (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente_id INT NOT NULL,
    tecnico_id INT NOT NULL,
    servico_id INT NOT NULL,
    data_agendada DATETIME NOT NULL,
    observacoes TEXT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (tecnico_id) REFERENCES tecnicos(id),
    FOREIGN KEY (servico_id) REFERENCES servicos(id)
);
